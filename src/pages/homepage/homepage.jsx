import React, { useState, useEffect } from 'react';
import NavBar from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Cards from '../../components/card/card';
import DemoCarousel from '../../components/carousal/carousal';
import Scroll from '../../components/scroll/scroll';
import Banner from "../../components/banner/banner";
import CategoryCard from "../../components/subCategoryCard/subcategorycard"; 
import { getCategories, getCarousal, getBanner, getTrendingBanner, list } from "../../components/apiCore";
import Trending from '../../components/trending/trending';
import "./home.css";

const Homepage = () => {

    const [category, setCategory] = useState([]);
    const [carousal, setCarousal] = useState([]);
    const [banner, setBanner] = useState([]);
    const [srch, setSrch] = useState('');
    const [data, setData] = useState([]);
    const [trending, setTrending] = useState([]);
    const [error, setError] = useState(false);

    const init = () => {
        getCategories().then(data => {
            if(data.error){
                setError(!error);
            }
            setCategory(data);
        });
        getCarousal(4).then(data2 => {
            if(data2.error){
                setError(true);
            }
            setCarousal(data2);
        });
        getBanner(2).then(data3 => {
            if(data3.error){
                setError(true);
            }
            setBanner(data3)
        });
        getTrendingBanner(3).then(data4 => {
            if(data4.error){
                setError(true);
            }
            setTrending(data4);
        })
    };

    useEffect(()=> {
        init();
    },[]);

    const search = (srch) => {
        list({search: srch})
        .then(response => {
            if(response.err){
                console.log(response.err)
            }else{
                setData(response);
            }
       })
    }

    const handlechange = (newValue) => {
         setSrch(newValue);
         if (srch!=='')
         {
            search(srch);
         }
      }

    // const showError = (error) => {
    //     if(error){
    //         return(
    //             <div className="alert alert-danger">'Plans failed to Load..</div>
    //         );
    //     }
    //     return null;
    // };

    return(
        <div className="app">
            <div className="head">
            <NavBar value={srch} onChange={handlechange}/>
            </div>
            { srch==='' ? 
            (
            <div>
            <div>    
            <Scroll data={category}/>
            <DemoCarousel data={carousal}/>
            </div>
            <div>
            {banner.map((bana) => (
                <Banner img={bana._id} name={bana.name} key={bana.name}/>
            ))}
            </div>
            <div className="box">
            <Trending data={trending} />
            </div>
            <div>
            {
                category.map((cato) => (
                    <div key={cato._id}>
                        <h2 align="center">{cato.name}</h2>
                         <CategoryCard name={cato._id} />
                    </div>
                ))
            }
            </div>
            </div>) 
            : 
            (
            <div>
            <br />
            <br />
            <h2>We found {data.length} Items</h2>
            <div className="box">
            {data.map((c, i) => (
                <Cards key={i} name={c.name} price={c.price} id={c._id} c={c} />
            ))}
            </div>
            </div>
            )
             }
            <br/>
            <br/>
            <br/>
            <br/>
            <Footer />
        </div>
    );
};

export default Homepage;