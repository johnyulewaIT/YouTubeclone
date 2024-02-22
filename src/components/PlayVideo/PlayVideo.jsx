import React, { useEffect, useState } from 'react';
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import {API_KEY, value_converter} from '../../data'
import moment from 'moment';
import { useParams } from 'react-router-dom';
const PlayVideo = () => {

  const {videoId} = useParams();

  const [apiData,setApiData] = useState(null);
  const [channeldata,setChannelData] = useState(null);

  const fetchVideoData = async () =>{
    //Fetching data
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url).then(res=>res.json()).then(data => setApiData(data.items[0]));
  }

  const fetchOtherData = async () =>{
    //fetching channel data
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelData_url).then(res=>res.json()).then(data=>setChannelData(data.items[0]));
  }

  useEffect(()=>{
    fetchVideoData();
  },[videoId])

  useEffect(()=>{
    fetchOtherData();
  },[apiData])


  return (
    <div className='play-video'>
     { /*<video src={video1} controls autoPlay muted> </video> */}
     <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <h3> {apiData?apiData.snippet.title:"Title here.."}</h3>
      <div className='play-video-info'>
        <p>{apiData?value_converter(apiData.statistics.viewCount):"16k"} &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>
        <div>
            <span><img src={like}/>{apiData?value_converter(apiData.statistics.likeCount):155}</span>
            <span><img src={dislike}/></span>
            <span><img src={share}/>245</span>
            <span><img src={save}/>Save</span>
        </div>
      </div>
      <hr/>
      <div className='publisher'>
        <img src={channeldata?channeldata.snippet.thumbnails.default.url:""}/>
        <div>
            <p>{apiData?apiData.snippet.channelTitle:""}</p>
            <span>{channeldata?value_converter(channeldata.statistics.subscriberCount):"1M"}</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className='vid-description'>
        <p>{apiData?apiData.snippet.description.slice(0,250):"Description"}</p>
        <hr/>
        <h4>{apiData?value_converter(apiData.statistics.commentCount):102}</h4>
        <div className='comment'>
            <img  src={user_profile}/>
            <div>
                <h3>Jack Nicholson <span>1 day ago</span></h3>
                <p>This is the best channel when it comes to web development
                  tutorial waoo just like it. Kudos</p>
                  <div className='comment-action'>
                    <img src={like}/>
                    <span>244</span>
                    <img src={dislike}/>
                  </div>
            </div>
        </div>
        <div className='comment'>
            <img  src={user_profile}/>
            <div>
                <h3>Jack Nicholson <span>1 day ago</span></h3>
                <p>This is the best channel when it comes to web development
                  tutorial waoo just like it. Kudos</p>
                  <div className='comment-action'>
                    <img src={like}/>
                    <span>244</span>
                    <img src={dislike}/>
                  </div>
            </div>
        </div>
        <div className='comment'>
            <img  src={user_profile}/>
            <div>
                <h3>Jack Nicholson <span>1 day ago</span></h3>
                <p>This is the best channel when it comes to web development
                  tutorial waoo just like it. Kudos</p>
                  <div className='comment-action'>
                    <img src={like}/>
                    <span>244</span>
                    <img src={dislike}/>
                  </div>
            </div>
        </div>
        <div className='comment'>
            <img  src={user_profile}/>
            <div>
                <h3>Jack Nicholson <span>1 day ago</span></h3>
                <p>This is the best channel when it comes to web development
                  tutorial waoo just like it. Kudos</p>
                  <div className='comment-action'>
                    <img src={like}/>
                    <span>244</span>
                    <img src={dislike}/>
                  </div>
            </div>
        </div>
        <div className='comment'>
            <img  src={user_profile}/>
            <div>
                <h3>Jack Nicholson <span>1 day ago</span></h3>
                <p>This is the best channel when it comes to web development
                  tutorial waoo just like it. Kudos</p>
                  <div className='comment-action'>
                    <img src={like}/>
                    <span>244</span>
                    <img src={dislike}/>
                  </div>
            </div>
        </div>
        <div className='comment'>
            <img  src={user_profile}/>
            <div>
                <h3>Jack Nicholson <span>1 day ago</span></h3>
                <p>This is the best channel when it comes to web development
                  tutorial waoo just like it. Kudos</p>
                  <div className='comment-action'>
                    <img src={like}/>
                    <span>244</span>
                    <img src={dislike}/>
                  </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default PlayVideo;
