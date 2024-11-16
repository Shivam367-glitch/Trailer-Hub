import Modal from 'react-bootstrap/Modal';
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

const VideoTrailer = (props) => { 
    
    console.log(props?.id);
    useMovieTrailer(props?.id); 
    const videoId=useSelector((store)=>store?.nowPlaying?.videoId); 


  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    fullscreen={true}
    className='m-0 p-0 bg-dark'
  >
    <Modal.Header closeButton className='bg-dark text-white'>
        <Modal.Title>Play Trailer</Modal.Title>
    </Modal.Header>
    <Modal.Body className='bg-dark'>
   {
    videoId? <iframe 
    title="Video Background"
    src={`https://www.youtube.com/embed/${videoId}?autoplay=0&loop=1&mute=1&controls=1`}
    style={{width:"100%",height:"100%"}}
  ></iframe>:<p className='text-white fs-5'>Trailer Not Available !</p>
   }
    </Modal.Body>
  </Modal>
  )
}

export default VideoTrailer