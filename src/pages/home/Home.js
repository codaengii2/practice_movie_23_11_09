import { useEffect, useState } from "react";
import { nowPlaying } from "../../api";
import styled from "styled-components";

const MainBanner = styled.div``;

export const Home = () => {
  const [nowPlayingData, setNowPlayingData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results } = await nowPlaying();
        setNowPlayingData(results);
        // console.log(results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(nowPlayingData);
  console.log(setLoading);

  return (
    <>
      {loading ? (
        "loading..."
      ) : (
        <div>
          {nowPlayingData && (
            <MainBanner>
              <h3>{nowPlayingData[0].title}</h3>
              <p>{nowPlayingData[0].overview}</p>
            </MainBanner>
          )}
        </div>
      )}
    </>
  );
};
