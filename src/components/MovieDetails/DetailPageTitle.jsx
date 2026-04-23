import { memo } from "react"
import { MdOutlineOpenInNew } from "react-icons/md"

const DetailPageTitle = ({title,homepage}) => {
  return (
    <>
      <span className="fw-bolder fs-4">{title}</span>
    
                      {homepage && (
                        <a
                          href={homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className=" ms-2 mb-1 text-white hover-effect icon-hover"
                        >
                          <MdOutlineOpenInNew size={30} />
                        </a>
                      )}
    </>
  )
}

export default memo(DetailPageTitle);