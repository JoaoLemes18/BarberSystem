import { createContext, useState } from 'react'

export const ModalMsgContext = createContext<any>(null)


export const ModalProvider = ({children}: any) => {
    const [msgModal, setMsgModal] = useState(false)

    const handleModal = () => {
        setMsgModal(msgModal)
    }

    return (
        <ModalMsgContext.Provider value={{ msgModal, handleModal }}>
            {children}
        </ModalMsgContext.Provider>
    )
}



