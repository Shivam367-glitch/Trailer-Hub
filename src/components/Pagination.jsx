import { memo } from "react";
import { Col } from "react-bootstrap";
import { AiOutlineCaretLeft,AiOutlineCaretRight } from "react-icons/ai";
import { useDispatch } from "react-redux";
 
const Pagination = ({page,total_pages,setPage}) => {

  const dispatch = useDispatch();
  return (
     <Col xs={12} className="m-0 p-0 text-center d-flex flex-row gap-3 justify-content-center align-items-center text-white"> 
                  <button onClick={() => dispatch(setPage(Math.max(1, page - 1)))} disabled={page === 1} className="border-0 rounded-circle p-2"><AiOutlineCaretLeft /></button>
                   <span>{page} / {total_pages}</span>
                   <button onClick={() => dispatch(setPage(Math.min(total_pages, page + 1)))} disabled={page === total_pages} className="border-0  rounded-circle p-2">
                    <AiOutlineCaretRight/>
                   </button>
         </Col>
  )
}

export default memo(Pagination);