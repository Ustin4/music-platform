import React, {ReactNode, useRef} from 'react';

interface Props {
    setFile: (file: any) => void;
    accept: string;
    children: ReactNode;
}

const FileUpload: React.FC<Props> = ({setFile, accept, children}) => {
    const ref = useRef<HTMLInputElement>(null);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(e?.target?.files![0])
    }
    return (
        <div onClick={() => ref?.current?.click()}>
            <input type={'file'}
                   accept={accept}
                   style={{display: 'none'}}
                   ref={ref}
                   onChange={onChange}
            />
            {children}
        </div>
    );
};

export default FileUpload;