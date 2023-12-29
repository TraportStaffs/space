// src/Home.tsx
import React, { useState } from 'react';
import './Home.css';

// component
import Modal from './Modal';

const Home: React.FC = () => {
  
  const tableData = [
    { id: 1, column1: 'Data 1', column2: 'Data 2', column3: 'Data 3', column4: 'Data 4', column5: 'Data 5', column6: 'Data 6' },
    { id: 2, column1: 'Data 7', column2: 'Data 8', column3: 'Data 9', column4: 'Data 10', column5: 'Data 11', column6: 'Data 12' },
    { id: 3, column1: 'Data 7', column2: 'Data 8', column3: 'Data 9', column4: 'Data 10', column5: 'Data 11', column6: 'Data 12' },
    { id: 4, column1: 'Data 7', column2: 'Data 8', column3: 'Data 9', column4: 'Data 10', column5: 'Data 11', column6: 'Data 12' },
    { id: 5, column1: 'Data 7', column2: 'Data 8', column3: 'Data 9', column4: 'Data 10', column5: 'Data 11', column6: 'Data 12' },
    { id: 6, column1: 'Data 7', column2: 'Data 8', column3: 'Data 9', column4: 'Data 10', column5: 'Data 11', column6: 'Data 12' },
    { id: 7, column1: 'Data 7', column2: 'Data 8', column3: 'Data 9', column4: 'Data 10', column5: 'Data 11', column6: 'Data 12' },
    { id: 8, column1: 'Data 7', column2: 'Data 8', column3: 'Data 9', column4: 'Data 10', column5: 'Data 11', column6: 'Data 12' },
    { id: 9, column1: 'Data 7', column2: 'Data 8', column3: 'Data 9', column4: 'Data 10', column5: 'Data 11', column6: 'Data 12' },
    { id: 10, column1: 'Data 7', column2: 'Data 8', column3: 'Data 9', column4: 'Data 10', column5: 'Data 11', column6: 'Data 12' },
    // Add more rows as needed
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <div id='layout'>
      <div className='table'>
        <div className='table-header'>
          <h2>이슈정리</h2>
          <div className='select-container'>
          <select
            onClick={openModal}
            style={{
              width: '102px',
              height: '40px',
              padding: '8px 8px 8px 14px',
              borderRadius: '32px',
              border: '1px solid #ddd',
              gap: '4px',
              position: 'absolute'
            }}
          >
            <option value='closed'>전체</option>
            <option value='open'>Open</option>
            <option value='closed'>Closed</option>
          </select>
          <Modal isOpen={isModalOpen} onClose={closeModal} />
          <select
            style={{
              width: '78px',
              height: '24px',
              top: '8px',
              right: '0px',
              border: 'none',
              position: 'absolute'
            }}
          >
            <option value='option1'>작성일 순</option>
            <option value='option2'>수정일 순</option>
            <option value='option2'>코멘트 순</option>
            {/* 추가적인 옵션들을 필요에 따라 추가하세요 */}
          </select>
          </div>
          
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Column 1</th>
              <th>Column 2</th>
              <th>Column 3</th>
              <th>Column 4</th>
              <th>Column 5</th>
              <th>Column 6</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.column1}</td>
                <td>{row.column2}</td>
                <td>{row.column3}</td>
                <td>{row.column4}</td>
                <td>{row.column5}</td>
                <td>{row.column6}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
