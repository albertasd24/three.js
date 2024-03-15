import "../style/modal.css";
const Modal = ({ children, isOpen, closeModal }) => {
    return (
        <article className={isOpen ? "modal is-open" : "modal"}>
            <button className="close-modal" onClick={()=>{closeModal()}} >X</button>
            <div className="modal-container">
                {children}
            </div>
        </article>
    )
}

export default Modal;