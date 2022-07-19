import styles from './style.module.css';
import {useRef, useState} from "react";
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const GraphEncryptionPage = () => {
    const [uploadedGraphUrl, setUploadedGraphUrl] = useState();
    const [encryptedGraphUrl, setEncryptedGraphUrl] = useState();
    const [modalIsOpen, setIsOpen] = useState(false);
    const messageInputRef = useRef();
    const passwordInputRef = useRef();

    const encryptSubmit = (e) => {
        e.preventDefault();

        const message = messageInputRef.current.value;
        const password = passwordInputRef.current.value;

        // 传给后端处理
        console.log({
            message: message,
            password: password,
        });

        setIsOpen(false);

        setEncryptedGraphUrl('https://images.unsplash.com/photo-1657804023799-3fa26a120cc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80')
    }

    const uploadGraphFile = (e) => {
        e.preventDefault();
        //传给后端文件
        setUploadedGraphUrl(`https://images.unsplash.com/photo-1657998623411-15c39b03080a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`)
    }

    const afterOpenModal = () => {
        console.log('opened');
    }
    return <div>
        <div>
            <h1>Graph Encryption</h1>
        </div>
        <div className={styles.pictures_container}>
            <div className={styles.picture_item}>
                <h3>Original Picture</h3>
                <div className={styles.picture_wrapper}>
                    {uploadedGraphUrl &&
                    <img
                        src={uploadedGraphUrl}
                    alt={`uploaded graph`}/> }
                </div>
            </div>
            <div className={styles.picture_item}>
                <h3>Encrypted Picture</h3>
                <div className={styles.picture_wrapper}>
                    {encryptedGraphUrl &&
                        <img
                            src={encryptedGraphUrl}
                        alt={`encrypted graph`}/>}
                </div>
            </div>
        </div>
        <div className={styles.buttons_wrapper}>
            <div>
                <form onSubmit={uploadGraphFile}>
                    <input id={`graph_file`} type={`file`} name={`graph_file`}/>
                    <button type={`submit`} className={`btn btn-primary btn-sm`}>Upload</button>
                </form>
            </div>
            <div>
                <button
                    onClick={setIsOpen.bind(null, true)}
                className={`btn btn-primary btn-sm`}>Encrypt</button>
            </div>
            <div>
                <button>Download</button>
            </div>
        </div>
        <div className={styles.output_wrapper}>
            <span>Output directory</span>
            <div className={styles.output_result}>&nbsp;</div>
        </div>
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={setIsOpen.bind(null, false)}
            contentLabel={'Encrypt info'}
            style={customStyles}
        >
            <div>
                <form
                    onSubmit={encryptSubmit}
                className={styles.encrypt_form}>
                    <div>
                        <div>
                            <label htmlFor="{`message`}">Message</label>
                        </div>
                        <input id={`message`} type="text" ref={messageInputRef}/>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="{`password`}">password</label>
                        </div>
                        <input id={`password`} type="text" ref={passwordInputRef}/>
                    </div>
                    <button type={`submit`}>Encrypt</button>
                </form>
            </div>
        </Modal>

    </div>
}

export default GraphEncryptionPage;