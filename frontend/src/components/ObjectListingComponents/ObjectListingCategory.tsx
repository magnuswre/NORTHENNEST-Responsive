import ObjectListing from '../../pages/ObjectListing/ObjectListing';

interface ObjectListingCategoryProps {
  category: string;
}

const ObjectListingCategory: React.FC<ObjectListingCategoryProps> = ({ category : string }) => {
  // return <ObjectListing category={category} />;
  return <ObjectListing  />;

};

export default ObjectListingCategory;

