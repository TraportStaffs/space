// Modal.tsx
import React, { useState } from 'react';
import icon from '../image/checked.png';
import './Modal.css';

interface FilterModalProps {
  isOpen: boolean;
  onClose: (id: any) => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose }) => {
  const buttons = [
    { id: 1, text: '작성일 순' },
    { id: 2, text: '수정일 순' },
    { id: 3, text: '코멘트 순' },
  ];
  const [checkedButton, setCheckedButton] = useState(null);

  const handleButtonClick = (buttonId: any) => {
    setCheckedButton(buttonId);
    onClose(checkedButton)
  };

  return (
    <div
      className={`modal ${isOpen ? 'open' : ''}`}
      onClick={onClose}
    >
      {/* 모달 내용 */}
      {isOpen && (
        <div
          className='sort-content'
          onClick={(e) => e.stopPropagation()} // 모달 클릭 시 닫히지 않도록 이벤트 전파 막기
        >
            <p className='sort-header'>정렬</p>
          <ul className='sort-modal'>
      {buttons.map((button) => (
        <li
          key={button.text}
          onClick={() => handleButtonClick(button.text)}
          className={checkedButton === button.text ? 'clicked' : ''}
        >
          {button.text}
          {checkedButton === button.text && (
                  <img className='check-icon' src={icon} alt='Check Icon' />
                )}
        </li>
      ))}
    
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterModal;
