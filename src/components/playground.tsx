import * as BABYLON from 'babylonjs';
import { FloatArray, Nullable } from 'babylonjs';
import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { FileUploader } from './file-upload';
import { AsciiGridLoader } from '../types/ascii-grid-loader';
import { EsriGridData } from '../interfaces/EsriGridData';
import { HeightMap } from '../types/height-map';
import { Result } from 'neverthrow';

interface Props {
}

interface PlaygroundState {
    isPlaying: boolean;
    isWireframeEnabled: boolean;
    showFileModalOpen: boolean;
    errorMsg: string;
}

export class Playground extends Component<Props, PlaygroundState> {
    private engine!: BABYLON.Engine;
    private scene!: BABYLON.Scene;
    private ground!: BABYLON.GroundMesh;
    private camera!: BABYLON.ArcRotateCamera;
    private heightMapImage!: string;

    public constructor(props: Props) {
        super(props);

        this.state = {
            isPlaying: true,
            isWireframeEnabled: false,
            showFileModalOpen: false,
            errorMsg: ""
        };
    }

    private loadFile = async(files: FileList) => {
        const file: File = (files)[0];

        let asciiGridLoader: AsciiGridLoader = new AsciiGridLoader(file);
        let esriGridDataResult: Result<EsriGridData, Error> = await asciiGridLoader.parse();
        if (esriGridDataResult.isOk()) {
            let esriGridData = esriGridDataResult.value;
            let heightMap: HeightMap = new HeightMap();
            let heightMapResult: Result<string, Error> = heightMap.generate(esriGridData);
            if (heightMapResult.isOk()) {
                let heightMapImage: string = heightMapResult.value;
                if (heightMapImage != null) {
                    this.load(esriGridData, heightMapImage);
                    this.setState(() => ({
                        showFileModalOpen: false
                    }));
                }
            }
            else {
                let error: string = heightMapResult.error.message;
                this.setState(() => ({
                    errorMsg: error
                }));
            }
        }
        else
        {
            let error: string = esriGridDataResult.error.message;
            this.setState(() => ({
                errorMsg: error
            }));
        }
    }

    private onFilesChanged = (files: FileList) => {
        this.loadFile(files);
    }
      
    public load(data: EsriGridData, heightMapImage: string) {
        this.heightMapImage = heightMapImage;
        let canvas: HTMLCanvasElement = document.getElementById("renderCanvas") as HTMLCanvasElement;
        this.engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });
        this.createScene(canvas, data, heightMapImage);
        window.addEventListener("resize", () => {
            console.info("resize");
            this.engine.resize();
        });
        this.engine.runRenderLoop(() => {
            let camera: BABYLON.ArcRotateCamera = this.scene.activeCamera as BABYLON.ArcRotateCamera;
            if (this.state.isPlaying) {
                camera.alpha += .001;
            }
            this.scene.render();
        });
    }

    private createScene(canvas: HTMLCanvasElement, data: EsriGridData, heightMapImage: string) {
        let yPercent:number = 0;
        let p: Nullable<FloatArray>;
        let isReachedFullHeight: boolean = false;
        let size: number = data.properties.nCols > data.properties.nRows ? data.properties.nCols: data.properties.nRows;
        
        setInterval(t => {
            if (yPercent < 100) {
                yPercent += 0.5;
                console.info(yPercent);
            }
        }, 25);

        this.scene = new BABYLON.Scene(this.engine);

        // Light
        var spot: BABYLON.PointLight = new BABYLON.PointLight("spot", new BABYLON.Vector3(size / 2, size, size / 2), this.scene);
        spot.diffuse = new BABYLON.Color3(1, 1, 1);
        spot.specular = new BABYLON.Color3(0, 0, 0);

        // Camera
        this.camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, size, BABYLON.Vector3.Zero(), this.scene);
        this.camera.lowerBetaLimit = 0.1;
        this.camera.upperBetaLimit = (Math.PI / 2) * 0.9;
        this.camera.lowerRadiusLimit = 30;
        this.camera.upperRadiusLimit = size * 1.5;
        this.camera.attachControl(canvas, true);
        
        // Ground
        var groundMaterial: BABYLON.StandardMaterial = new BABYLON.StandardMaterial("ground", this.scene);
        this.ground = BABYLON.Mesh.CreateGroundFromHeightMap("ground", heightMapImage, size, size, 200, 0, data.maxValue, this.scene, true, () => {
            p = this.ground.getVerticesData(BABYLON.VertexBuffer.PositionKind, false, true);
        });
        this.ground.material = groundMaterial;
        this.ground.material.wireframe = this.state.isWireframeEnabled;

        var positionFunction = function(positions: FloatArray) {
            if (p !== null) {
                for (var i = 0; i < positions.length; i = i + 3) {
                    if (!isReachedFullHeight) {
                        positions[i + 1] = p[i + 1] * ((yPercent * 1.0) / (100 * 1.0));
                        if (yPercent >= 100) {
                            isReachedFullHeight = true;
                        }
                    }
                }
            }
        };

        var rotAnim: BABYLON.Animation = new BABYLON.Animation("ra", "rotation", 15, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

        let rotKeys = [];
        rotKeys.push({ frame: 0, value: this.camera.rotation });
        rotKeys.push({ frame: 40, value: new BABYLON.Vector3(0, -Math.PI*2, 0) });
        rotKeys.push({ frame: 80, value: new BABYLON.Vector3(0, Math.PI*2, 0) });
        rotKeys.push({ frame: 120, value: new BABYLON.Vector3(0, 0, 0) });
        rotAnim.setKeys(rotKeys);

        this.camera.animations.push(rotAnim);

        this.scene.registerBeforeRender(() => {
            this.ground.updateMeshPositions(positionFunction);
            this.ground.bakeCurrentTransformIntoVertices();
        });
    };

    private handleClose = () => {
        this.setState(() => ({
            showFileModalOpen: false
        }));
    }

    private triggerOpen = () => {
        this.setState(() => ({
            showFileModalOpen: true,
            errorMsg: ""
        }));
    }

    private triggerPlay = () => {
        this.setState((previousState) => ({
            isPlaying: !previousState.isPlaying
        }));
    }
  
    private triggerWireframe = () => {
        this.setState((previousState) => ({
            isWireframeEnabled: !previousState.isWireframeEnabled
        }), () => {
            if (this.ground && this.ground.material) {
                this.ground.material.wireframe = this.state.isWireframeEnabled;
            }
        });
    }

    private triggerScreenshot = () => {
        BABYLON.Tools.CreateScreenshot(this.engine, this.camera, { width: 1024, height: 1024 }, (data) => {            
            let anchor:HTMLAnchorElement = document.createElement("a");
            anchor.href = data;
            anchor.download = `screenshot-${this.getFormattedTime()}.png`;

            const clickHandler = () => {
                setTimeout(() => {
                    URL.revokeObjectURL(data);
                    document.removeEventListener('click', clickHandler);
                }, 150);
            };

            anchor.addEventListener('click', clickHandler, false);

            anchor.click();
        });
    }

    private triggerDownload = () => {
        let anchor:HTMLAnchorElement = document.createElement("a");
        anchor.href = this.heightMapImage;
        anchor.download = `heightmap-${this.getFormattedTime()}.png`;

        const clickHandler = () => {
            setTimeout(() => {
                URL.revokeObjectURL(this.heightMapImage);
                document.removeEventListener('click', clickHandler);
            }, 150);
        };

        anchor.addEventListener('click', clickHandler, false);

        anchor.click();
    }

    private getFormattedTime = (): string => {
        var today = new Date();
        var y = today.getFullYear();
        var m = (today.getMonth() + 1).toString().padStart(2, '0');
        var d = today.getDate().toString().padStart(2, '0');
        var h = today.getHours().toString().padStart(2, '0');
        var mi = today.getMinutes().toString().padStart(2, '0');
        var s = today.getSeconds().toString().padStart(2, '0');
        return y + "-" + m + "-" + d + "-" + h + "-" + mi + "-" + s;
    }

    public render(): JSX.Element {
        return (
            <>
                <canvas id="renderCanvas" width="800" height="600"></canvas>
                <div className="controls">
                    <button onClick={this.triggerOpen}>
                        <>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                        </svg>
                        <span>
                            Open
                        </span>
                        </>
                    </button>
                    <button onClick={this.triggerPlay}>
                        {this.state.isPlaying
                        ?<>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>
                            Pause
                        </span>
                        </>
                        :<>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>
                            Play
                        </span>
                        </>
                        }
                    </button>
                    <button onClick={this.triggerWireframe} className={`${this.state.isWireframeEnabled ? 'active' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                        </svg>
                        <span>
                            Wireframe
                        </span>
                    </button>
                    <button onClick={this.triggerScreenshot}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>
                            Screenshot
                        </span>
                    </button>
                    <button onClick={this.triggerDownload}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        <span>
                            Download
                        </span>
                    </button>
                </div>
                <Modal show={this.state.showFileModalOpen} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="pb-3">
                            Select an Esri Ascii Grid file to view. The file will be processed locally in your browser.
                        </div>
                        <div className={`d-flex justify-content-center align-items-center`}>
                            <FileUploader onFilesChanged={ this.onFilesChanged } />
                        </div>
                        {this.state.errorMsg &&
                        <div className={`d-flex justify-content-center align-items-center text-danger`}>
                            { this.state.errorMsg }
                        </div>
                        }
                        <div className="mt-3">Need a sample file? Download one <a href="https://github.com/IDGuy/esri-ascii-viewer/blob/main/sample-resources/castle.asc?raw=true" download>here</a></div>
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}