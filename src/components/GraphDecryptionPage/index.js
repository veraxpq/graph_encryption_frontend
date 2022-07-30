import styles from './style.module.css';
import {useRef, useState} from "react";
import Modal from 'react-modal';
import {uploadImageToImgur} from "../../services/imageUpload";
import {getDecryptedGraph} from "../../services/graphService";

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

const GraphDecryptionPage = () => {
    const [uploadedGraphUrl, setUploadedGraphUrl] = useState();
    const [encryptedGraphUrl, setEncryptedGraphUrl] = useState();
    const [message, setMessage] = useState();
    const [modalIsOpen, setIsOpen] = useState(false);
    const fileUploadInputRef = useRef();
    const passwordInputRef = useRef();
    const imageIdInputRef = useRef();

    const userToken = localStorage.getItem("token");

    const decryptSubmit = async (e) => {
        e.preventDefault();

        const password = passwordInputRef.current.value;

        // 传给后端处理
        const {data} = await getDecryptedGraph(
            encryptedGraphUrl,
            password,
            userToken);
        setIsOpen(false);

        const message = data.message;

        // setUploadedGraphUrl('https://images.unsplash.com/photo-1657804023799-3fa26a120cc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80')
        setMessage(message);
    }

    const uploadGraphFile = async (e) => {
        e.preventDefault();
        //传给后端文件
        try {
            const file = fileUploadInputRef.current.files[0];

            const formData = new FormData();
            formData.append("image", file);
            const {data} = await uploadImageToImgur(formData);

            setEncryptedGraphUrl(data.link);
        } catch (e) {
            console.error(e);
        }
    }

    const afterOpenModal = () => {
        console.log('opened');
    }
    return <div className={styles.home}>
        <div>
            <h1>Graph Decryption</h1>
        </div>
        <div className={styles.pictures_container}>
            <div className={styles.picture_item}>
                <h3>Encrypted Picture</h3>
                <div className={styles.picture_wrapper}>
                    {encryptedGraphUrl &&
                        <img
                            src={encryptedGraphUrl}
                            alt={`encrypted graph`}/>}
                </div>
            </div>
            <div className={styles.picture_item}>
                <h3>Original Picture</h3>
                <div className={styles.picture_wrapper}>
                    {uploadedGraphUrl &&
                        <img
                            src={uploadedGraphUrl}
                            alt={`uploaded graph`}/>}
                </div>
            </div>
        </div>
        <div className={styles.buttons_wrapper}>
            <div>
                <form onSubmit={uploadGraphFile}>
                    <input
                        id={`graph_file`}
                        type={`file`}
                        name={`graph_file`}
                        ref={fileUploadInputRef}
                    />
                    <button type={`submit`} className={styles.button_test}>Upload</button>
                </form>
            </div>
            <div>
                <button
                    onClick={setIsOpen.bind(null, true)}
                    className={styles.button_test}>Decrypt
                </button>
            </div>
            <div>
                <button>Download</button>
            </div>
        </div>
        <div className={styles.output_wrapper}>
            <span>Output directory</span>
            <div className={styles.output_result}>&nbsp;</div>
        </div>
        {message &&
            <div>
                <p>{message}</p>
            </div>}
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={setIsOpen.bind(null, false)}
            contentLabel={'Decrypt info'}
            style={customStyles}
        >
            <div>
                <form
                    onSubmit={decryptSubmit}
                    className={styles.encrypt_form}>
                    <div>
                        <div>
                            <label htmlFor="{`password`}">password</label>
                        </div>
                        <input id={`password`} type="text" ref={passwordInputRef}/>
                    </div>
                    <button type={`submit`}>Decrypt</button>
                </form>
            </div>
        </Modal>

    </div>
}

export default GraphDecryptionPage;