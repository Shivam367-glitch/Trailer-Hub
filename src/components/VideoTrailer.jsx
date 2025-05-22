import Modal from 'react-bootstrap/Modal';
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';
import ReactPlayer from 'react-player/lazy';

const VideoTrailer = (props) => { 
    useMovieTrailer(props?.id); 
    const videoId=useSelector((store)=>store?.nowPlaying?.videoId); 


  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    fullscreen={true}
    className='bg-dark'
  >
    <Modal.Header closeButton className='bg-dark text-white'>
        <Modal.Title>Play Trailer</Modal.Title>
    </Modal.Header>
    <Modal.Body className='bg-dark m-0 p-0'>
   {
    videoId?<ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}` } controls={true} playing={true}  muted={true}   width='100%'
              height='100%' />:<p className='text-white fs-5'>Trailer Not Available !</p>
   }
    </Modal.Body>
  </Modal>
  )
}

export default VideoTrailer

//  <iframe 
//         src={`https://www.youtube.com/embed/${videoId}?autoplay=0&loop=1&mute=1&controls=1`}
//         className='w-100 h-100'
//        title={"video player"} 
//       allow={"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" }
//       allowfullscreen
//   ></iframe>