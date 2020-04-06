import React from 'react';
import './preview-collection.scss';
import ColectionItem from '../collectionItem/collectionItem';


const PreviewCollection = ({ title, items}) => {
   return (
     <div className="collection-preview">
         <h1 className="title">{title.toUpperCase()}</h1>
         <div className="preview">
             {
                 items
                 .filter((item, index) => index < 4)
                 .map(({id, ...otherItemProps}) => (
                     <ColectionItem key={id} {...otherItemProps} />
                 ))
             }
         </div>
     </div>
   );
}

export default PreviewCollection; 