import React from 'react';
import Footer from "../../components/footer/footer";
import CategoryCard from '../../components/subCategoryCard/subcategorycard';

const SubCategoryPage = (props) => {

    const Name= props.match.params.categoryId;

    return(
        <div style={{textAlign:'center'}}>
            <h2>Browse Categories</h2>
            <CategoryCard name={Name}/>
            <br />
            <br />
            <br />
            <Footer />
        </div>
    );
}

export default SubCategoryPage;