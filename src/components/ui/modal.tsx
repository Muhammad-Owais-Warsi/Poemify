import React from 'react'
type ModalType = {
  setIsModal: (value: boolean) => void;
  url:string;
}

const ModalBox: React.FC<ModalType> = ({ setIsModal,url }) => {
  return <>
  (
    <div className="flex flex-col items-center justify-center">
      <img src={url} alt="Image" />
      <button
        className="my-5 w-auto px-8 h-10 bg-blue-600 text-white rounded-md shadow hover:shadow-lg font-semibold"
        onClick={() => setIsModal(false)}
      >
        Close
      </button>
    </div>
  )
</>
}

// export default ModalBox 
