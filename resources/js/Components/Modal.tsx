import React, { ReactNode } from "react";

interface ModalProps {
    children: ReactNode;
    width?: string;
}

export default function Modal({ children, width = "w-[40rem]" }: ModalProps) {
    return (
        <React.Fragment>
            <input type="checkbox" id="modal" className="modal-toggle" />

            <div className="modal" role="dialog">
                <div className={`modal-box ${width} bg-white`}>{children}</div>
                <label className="modal-backdrop" htmlFor="modal">
                    Close
                </label>
            </div>
        </React.Fragment>
    );
}
