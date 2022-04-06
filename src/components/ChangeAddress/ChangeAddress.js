import React from 'react'
import ReactDOM from "react-dom"
import { Address } from 'components'
import styles from "./ChangeAddress.module.css";

const ChangeAddress = ({ setModal }) => {
    return ReactDOM.createPortal(
        <div>
            <div className={styles.active}>
                <div className={styles.modalContent}>
                    <button
                        className='btn btn-icon-only'
                        onClick={() => setModal(pre => !pre)}
                    >
                        <span className="material-icons">close</span>
                    </button>
                    <Address setModal={setModal} />
                </div>
            </div>
        </div>, document.getElementById("modal")
    )
}

export { ChangeAddress }