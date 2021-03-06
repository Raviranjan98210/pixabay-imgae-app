import React, { useEffect, useState } from "react";
import { RESET_IMAGES_BY_TYPE, SET_IMAGES_BY_TYPE } from "../../context/Types";

import api from "../../api/index";

import { useParams } from "react-router-dom";
import { GlobalStateValue } from "../../context/GlobalState";
import ProgressBar from "../../components/ui/ProgressBar/ProgressBar";
import SkeltonLoading from "../../components/ui/SkeltonLoading/SkeltonLoading";
import CustomInfiniteScroll from "../../components/ui/InfiniteScroll/InfinteScroll";
import NoImagesFound from "../../components/ui/NoImagesFound/NoImagesFound";

const ImageType = () => {
  const { type } = useParams();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [{ imagesByType }, dispatch] = GlobalStateValue();

  useEffect(() => {
    dispatch({
      type: RESET_IMAGES_BY_TYPE,
    });

    fetchData();
  }, [type]);

  const fetchData = async () => {
    await setPage(page + 1);
    try {
      const response = await api.imagesByType(page, type);
      dispatch({
        type: SET_IMAGES_BY_TYPE,
        payload: response.data.hits,
      });

      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return (
      <>
        <ProgressBar />
        <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-x-0 gap-7">
          <SkeltonLoading noOfBoxes={8}></SkeltonLoading>
        </div>
      </>
    );
  }

  return (
    <div>
      {imagesByType.length > 0 ? (
        <CustomInfiniteScroll
          images={imagesByType}
          fetchData={fetchData}
          isLoading={isLoading}
        />
      ) : (
        <NoImagesFound />
      )}
    </div>
  );
};

export default ImageType;
