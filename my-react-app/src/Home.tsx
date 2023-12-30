// src/Home.tsx
import React, { useEffect, useState } from 'react';
import './Home.css';
import blackArrowIcon from './image/black-arrow.png'
import blueArrowIcon from './image/blue-arrow.png'

// component
import Modal from './modal/FilterModal';
import FilterModal from './modal/SortModal';
import { getGitHubIssues } from './api';

const Home: React.FC = () => {
  const [tableData, setTableData] = useState<any[]>([]); ;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [issueStatus, setIssueStatus] = useState('open');
  const [sortStatus, setSortStatus] = useState('created');
  const [isBlueIcon, setIsBlueIcon] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const openFilterModal =() =>{
    setFilterModalOpen(true)
  }
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeFilterModal = (id: any) =>{
    console.log(id,'id');
    
    setSortStatus(id)
    setFilterModalOpen(false)
  }
  const closeModal = (id: any) => {
    if (id !== '이슈 상태') {
      setIssueStatus(id);
      setIsBlueIcon(true)
    } else {
      setIsBlueIcon(false)
    }

    setIsModalOpen(false);
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const tableData = await getGitHubIssues(issueStatus, sortStatus);
        setTableData(tableData);
      } catch (error) {
        // 에러 처리
        console.error('Error in fetchData:', error);
      }
    }

    fetchData();
  }, [issueStatus, sortStatus]);
    // 현재 페이지에 해당하는 데이터를 슬라이싱
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);
  
    // 페이지 변경 이벤트 핸들러
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    
  return (
    <div id='layout'>
      <div className='table'>
        <div className='table-header'>
          <h3>이슈정리</h3>
          <div className='select-container'>
            <button
              id='issueStatusButton'
              className={`border-btn ${issueStatus !== '이슈 상태' ? 'blue' : ''}`}
              onClick={openModal}
            >{issueStatus}
              <img className='arrow' src={isBlueIcon ? blueArrowIcon : blackArrowIcon} alt="Arrow Icon" />
            </button>

            <Modal isOpen={isModalOpen} onClose={closeModal} />
            <FilterModal isOpen={filterModalOpen} onClose={closeFilterModal} />
            <button
              className='date-btn'
              onClick={openFilterModal}
            >작성일 순
              <img className='arrow' src={blackArrowIcon} alt="Icon" />
            </button>
          </div>

        </div>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>수정일</th>
              <th>코멘트 수</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((row: any, index: number) => (
              <tr key={row.id}>
                <td>{index + 1}</td>
                <td>{row.title}</td>
                <td>{row.user.login}</td>
                <td>{row.created_at}</td>
                <td>{row.updated_at}</td>
                <td>{row.comments}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
          {Array.from({ length: Math.ceil(tableData.length / itemsPerPage) }).map((_, index) => (
            <button key={index + 1} onClick={() => paginate(index + 1)}>{index + 1}</button>
          ))}
        </div>
    </div>
  );
};

export default Home;
