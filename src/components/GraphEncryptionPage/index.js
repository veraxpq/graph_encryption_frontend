import styles from './style.module.css';
import {useRef, useState} from "react";
import Modal from 'react-modal';
import {uploadImageToImgur} from "../../services/imageUpload";
import {getEncryptedGraph} from "../../services/graphService";
import {useSelector} from "react-redux";

const customStyles = {
    content: {
        top: '50%', left: '50%', right: 'auto', bottom: 'auto', marginRight: '-50%', transform: 'translate(-50%, -50%)',
    },
};

const GraphEncryptionPage = () => {
    const [uploadedGraphUrl, setUploadedGraphUrl] = useState();
    const [encryptedGraphUrl, setEncryptedGraphUrl] = useState();
    const [handling, setHandling] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);
    const fileUploadInputRef = useRef();
    const messageInputRef = useRef();
    const passwordInputRef = useRef();

    const userToken = localStorage.getItem("token");

    const {data} = useSelector(state => state.personalProfile);
    const userId = localStorage.getItem("userId");

    const encryptSubmit = async (e) => {

        e.preventDefault();
        setHandling(true);

        const message = messageInputRef.current.value;
        const password = passwordInputRef.current.value;

        // 传给后端处理
        try {
            const {data} = await getEncryptedGraph(
                userId,
                uploadedGraphUrl,
                message,
                password,
                userToken);
            setEncryptedGraphUrl(data.encrypted_image_url);
        } catch (e) {
            console.error(e);
        }

        setHandling(false);
        setIsOpen(false);
    }

    const uploadGraphFile = async (e) => {
        e.preventDefault();
        setHandling(true);
        setIsOpen(true);

        try {
            const file = fileUploadInputRef.current.files[0];

            const formData = new FormData();
            formData.append("image", file);
            const {data} = await uploadImageToImgur(formData);

            setUploadedGraphUrl(data.link);

        } catch (e) {
            console.error(e);
        }

        setHandling(false);
        setIsOpen(false);
    }

    const afterOpenModal = () => {
        console.log('opened');
    }
    return <div
        className={styles.home}>
        <div className={styles.title}>
            <h1>Graph Encryption</h1>
        </div>
        <div className={styles.pictures_container}>
            <div className={styles.picture_item}>
                <h3>Original Picture</h3>
                <div className={styles.picture_wrapper}>
                    {uploadedGraphUrl && <img
                        src={uploadedGraphUrl}
                        alt={`uploaded graph`}/>}
                </div>
            </div>
            <div className={styles.picture_item}>
                <h3>Encrypted Picture</h3>
                <div className={styles.picture_wrapper}>
                    {encryptedGraphUrl && <img
                        src={encryptedGraphUrl}
                        alt={`encrypted graph`}/>}
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
                        ref={fileUploadInputRef}/>
                    <button type={`submit`}
                        // className={`btn btn-primary btn-sm`}
                            className={styles.button_test}
                    >
                        Upload
                    </button>
                </form>
            </div>
            <div>
                <button
                    onClick={setIsOpen.bind(null, true)}
                    className={styles.button_test}
                >Encrypt
                </button>
            </div>
            <div>
                <a href={encryptedGraphUrl}
                   target={`_blank`}
                   className={styles.button_test}>Download</a>
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
                {handling ?
                    `handling...`
                    :
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
                    </form>}
            </div>
        </Modal>

    </div>
}

export default GraphEncryptionPage;