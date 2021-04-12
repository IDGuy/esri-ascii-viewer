import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

interface Props {
  onFilesChanged: ((files: FileList) => void);
}

export class FileUploader extends Component<Props> {
    private hiddenFileInput = React.createRef<HTMLInputElement>();

    private handleClick = (event: React.SyntheticEvent) => {
        this.hiddenFileInput.current?.click();
    };

    private handleFileChange = (event: React.SyntheticEvent) => {
        const { files } = event.target as HTMLInputElement;
        if (files) this.props.onFilesChanged(files);
    };

    public render(): JSX.Element {
        return (
            <>
              <Button onClick={this.handleClick}>
                  Select file
              </Button>
              <input type="file"
                      ref={this.hiddenFileInput}
                      onChange={this.handleFileChange}
                      style={{display:'none'}}
                      accept=".asc" 
              /> 
            </>
        );
    }
}