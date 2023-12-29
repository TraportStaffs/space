// Modal.tsx
import React, { useState } from 'react';
import Button from './component/Button';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [buttonColor, setButtonColor] = useState('#1A8CFF');

  const handleButtonClick = (color: string) => {
    setButtonColor(color);
  };

  return (
    <div
      className={`modal ${isOpen ? 'open' : ''}`}
      onClick={onClose}
    >
      {/* 모달 내용 */}
      {isOpen && (
        <div
          className='modal-content'
          onClick={(e) => e.stopPropagation()} // 모달 클릭 시 닫히지 않도록 이벤트 전파 막기
        >
          {/* 버튼 영역 */}
          <div className='button-container'>
            <Button
              backgroundColor={buttonColor}
              onClick={() => handleButtonClick('#1A8CFF')}
            >
              전체
            </Button>
            <Button
              backgroundColor={buttonColor}
              onClick={() => handleButtonClick('#1A8CFF')}
            >
              open
            </Button>
            <Button
              backgroundColor={buttonColor}
              onClick={() => handleButtonClick('#1A8CFF')}
            >
              closed
            </Button>
          </div>

          {/* 모달 내용 */}
          <p>모달 내용이 여기에 들어갑니다.</p>
          <button onClick={onClose}>적용</button>
        </div>
      )}
    </div>
  );
};

export default Modal;
