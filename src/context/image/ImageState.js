import React, { useReducer } from 'react';
import imageReducer from './imageReducer';
import ImageContext from './imageContext';
import { RELOAD, LOAD_ALBUM, SET_LOADING, CLEAR_PAGE } from './types';

const config = require('../../config/default.json');

const ImageState = props => {
  const initialState = {
    data: [],
    loading: false,
    current: {
      data: {
        id: 'bde3BQw',
        title: "10 Board Games to Keep You Busy While You're Quarantined",
        description: null,
        datetime: 1584560707,
        cover: 'YFwJxm4',
        cover_edited: null,
        cover_width: 600,
        cover_height: 750,
        account_url: 'mikeshinobi',
        account_id: 11843704,
        privacy: 'hidden',
        layout: 'blog',
        views: 69744,
        link: 'https://imgur.com/a/bde3BQw',
        favorite: false,
        nsfw: false,
        section: null,
        images_count: 11,
        in_gallery: true,
        is_ad: false,
        include_album_ads: false,
        is_album: true,
        images: [
          {
            id: 'YFwJxm4',
            title: null,
            description:
              "Let's face it, we have no idea how long we're gonna be stuck in the house while we wait for this pesky \"deadly virus\" thing to blow over, so it's probably a good idea to have something to keep you and your family entertained while you wait it out.\n\nHere's a list of 10 tabletop games that are (sometimes vaguely) related to our current predicament!",
            datetime: 1584582905,
            type: 'image/jpeg',
            animated: false,
            width: 600,
            height: 750,
            size: 341949,
            views: 50911,
            bandwidth: 17408965539,
            vote: null,
            favorite: false,
            nsfw: null,
            section: null,
            account_url: null,
            account_id: null,
            is_ad: false,
            in_most_viral: false,
            has_sound: false,
            tags: [],
            ad_type: 0,
            ad_url: '',
            edited: '0',
            in_gallery: false,
            link: 'https://i.imgur.com/YFwJxm4.jpg'
          },
          {
            id: 'B4ppm4g',
            title: 'Pandemic',
            description:
              'Pandemic by Z-Man Games is based in a world where four nasty diseases have broken out, leaving it up to a team of specialists from a number of different fields to work out the cures before humanity is depleted. Players work cooperatively to find the strengths of their characters to contribute to the elimination of the diseases as more and more outbreaks occur. With time running against you, you must work hard and work fast to stop the infection from spreading while also working toward a long-lasting cure. You either win or you lose together\u2013and take humanity down with you.\n\nhttps://tabletophaven.com/pandemic/',
            datetime: 1584560708,
            type: 'image/jpeg',
            animated: false,
            width: 600,
            height: 600,
            size: 240234,
            views: 44782,
            bandwidth: 10758158988,
            vote: null,
            favorite: false,
            nsfw: null,
            section: null,
            account_url: null,
            account_id: null,
            is_ad: false,
            in_most_viral: false,
            has_sound: false,
            tags: [],
            ad_type: 0,
            ad_url: '',
            edited: '0',
            in_gallery: false,
            link: 'https://i.imgur.com/B4ppm4g.jpg'
          },
          {
            id: '0cVyAnJ',
            title: 'Zombies!!!',
            description:
              'Zombies? Alright yeah, we\'re not facing a zombie invasion (yet!) but zombies still have that "end of the world" vibe that a lot of us are feeling right now, so zombie-themed games felt like a good fit for this list.\n\nIn Zombies!!! Third Edition Board Game, your team strives to make it to the Helipad to get out of the danger zone in time. Players have to make it to the Helipad without being depleted of their life tokens that keep them alive. There are a variety of different scenarios and dangerous actions that must be worked through in order to win. The game comes with 4 new zombie figurines, 4 different door tokens and different survivor tokens to delve into the different scenarios, and it can be used with any of the other kinds of Zombies!!! games.\n\nhttps://tabletophaven.com/zombies/',
            datetime: 1584560734,
            type: 'image/jpeg',
            animated: false,
            width: 1091,
            height: 1500,
            size: 385924,
            views: 36250,
            bandwidth: 13989745000,
            vote: null,
            favorite: false,
            nsfw: null,
            section: null,
            account_url: null,
            account_id: null,
            is_ad: false,
            in_most_viral: false,
            has_sound: false,
            tags: [],
            ad_type: 0,
            ad_url: '',
            edited: '0',
            in_gallery: false,
            link: 'https://i.imgur.com/0cVyAnJ.jpg'
          },
          {
            id: 'rbTIhgy',
            title: 'Plague Inc.',
            description:
              'A virus, a fungus, an amoeba or an infection\u2013what will you use to infect and kill the entire world? Plague Inc. The Board Game challenges you to try and infect every single person on the planet with a substance that constantly mutates over time. Use strategy to make the substance resistant to cold climates and able to travel through water in order for it to reach as many people as possible. But be careful\u2013scientists will start working to cure the infection while you are working. You also cannot infect people too fast, or they will die before they can infect the rest of the world.\n\nhttps://tabletophaven.com/plague-inc-the-board-game/',
            datetime: 1584560748,
            type: 'image/jpeg',
            animated: false,
            width: 750,
            height: 1000,
            size: 171581,
            views: 31688,
            bandwidth: 5437058728,
            vote: null,
            favorite: false,
            nsfw: null,
            section: null,
            account_url: null,
            account_id: null,
            is_ad: false,
            in_most_viral: false,
            has_sound: false,
            tags: [],
            ad_type: 0,
            ad_url: '',
            edited: '0',
            in_gallery: false,
            link: 'https://i.imgur.com/rbTIhgy.jpg'
          },
          {
            id: 'h95N61v',
            title: 'Armageddon: From the Ground Up',
            description:
              'Armageddon: From the Ground Up by Queen Games is set in a post-apocalyptic world where the players are attempting to rebuild their society. While new towns are being built, players must thwart thieves and marauders who are trying to ruin those towns. You can get more survivors to move to your town but you must be sure you can accommodate them lest they join the marauders instead. This is a family-friendly tactical strategy game. Armageddon is a game for four players. This game can take up to 90 minutes to complete.\n\nhttps://tabletophaven.com/armageddon-from-the-ground-up/',
            datetime: 1584560772,
            type: 'image/jpeg',
            animated: false,
            width: 600,
            height: 600,
            size: 84192,
            views: 23174,
            bandwidth: 1951065408,
            vote: null,
            favorite: false,
            nsfw: null,
            section: null,
            account_url: null,
            account_id: null,
            is_ad: false,
            in_most_viral: false,
            has_sound: false,
            tags: [],
            ad_type: 0,
            ad_url: '',
            edited: '0',
            in_gallery: false,
            link: 'https://i.imgur.com/h95N61v.jpg'
          },
          {
            id: 'RJxOGZG',
            title: 'Daytrader',
            description:
              'The stock market might be crashing IRL, but in this game you can become an expert daytrader and make millions (or lose everything)!\n\nDaytrader: A Financial Board Game is a board game based on finance and economics that puts players in the role of stock market investors. Regardless of whether you know the ins and outs of the financial markets or are just a beginner, you will easily understand how to play and win this game. You can work with companies to earn money and then sell your stocks to help grow you savings account. Reach the bank before the market drops and sets you back. Daytrader: A Financial Board Game is suitable for up to six players at a time.\n\nhttps://tabletophaven.com/daytrader-a-financial-board-game/',
            datetime: 1584560790,
            type: 'image/jpeg',
            animated: false,
            width: 1024,
            height: 1024,
            size: 146220,
            views: 23793,
            bandwidth: 3479012460,
            vote: null,
            favorite: false,
            nsfw: null,
            section: null,
            account_url: null,
            account_id: null,
            is_ad: false,
            in_most_viral: false,
            has_sound: false,
            tags: [],
            ad_type: 0,
            ad_url: '',
            edited: '0',
            in_gallery: false,
            link: 'https://i.imgur.com/RJxOGZG.jpg'
          },
          {
            id: 'VvbiDyj',
            title: 'Dead of Winter',
            description:
              'Fight the undead when you play the Dead of Winter by Plaid Hat Games. This co-op game suitable for anywhere between two to five players takes place is a small, weak colony of post-apocalyptic survivors in a world where most everyone is either infected zombies or dead. Every player is the leader of a survivor faction that has many different characters within it. This psychological co-op game pits players against themselves and their own personal secret objectives, ones that could sabotage the game if not reconciled, while fighting together to ultimately stay alive.\n\nhttps://tabletophaven.com/dead-of-winter/',
            datetime: 1584560804,
            type: 'image/jpeg',
            animated: false,
            width: 600,
            height: 600,
            size: 428698,
            views: 17169,
            bandwidth: 7360315962,
            vote: null,
            favorite: false,
            nsfw: null,
            section: null,
            account_url: null,
            account_id: null,
            is_ad: false,
            in_most_viral: false,
            has_sound: false,
            tags: [],
            ad_type: 0,
            ad_url: '',
            edited: '0',
            in_gallery: false,
            link: 'https://i.imgur.com/VvbiDyj.jpg'
          },
          {
            id: '6g8dUFq',
            title: 'Zombicide',
            description:
              'You and up to five other players can live out your post-apocalyptic fantasies with Zombicide by CMON. This game lets you play the role of one of six survivors, each with their own unique skill trees and special abilities to work with. It uses an AI system to control the zombies for an immersive experience.\n\nhttps://tabletophaven.com/zombicide/',
            datetime: 1584560818,
            type: 'image/jpeg',
            animated: false,
            width: 1440,
            height: 1500,
            size: 585600,
            views: 19528,
            bandwidth: 11435596800,
            vote: null,
            favorite: false,
            nsfw: null,
            section: null,
            account_url: null,
            account_id: null,
            is_ad: false,
            in_most_viral: false,
            has_sound: false,
            tags: [],
            ad_type: 0,
            ad_url: '',
            edited: '0',
            in_gallery: false,
            link: 'https://i.imgur.com/6g8dUFq.jpg'
          },
          {
            id: 'mCCrsvV',
            title: 'Survive: Escape from Atlantis',
            description:
              "What better time to play a game about survival when you're also trying to survive IRL?\n\nSurvive: Escape From Atlantis by Stronghold Games takes place on the island of Atlantis. After a group of explorers reach the city and collect their treasures, an underwater volcano has violently erupted and has sent the ancient city tumbling into the sea. These explorers must then try to avoid a doomed fate, racing against the clock to get out of the city before it\u2019s too late. Adventurers must avoid sea creatures like sharks, whales and sea serpents that try to stop them from returning home. This game is suitable for two to four players.\n\nhttps://tabletophaven.com/survive-escape-from-atlantis/",
            datetime: 1584560841,
            type: 'image/jpeg',
            animated: false,
            width: 600,
            height: 600,
            size: 345959,
            views: 13923,
            bandwidth: 4816787157,
            vote: null,
            favorite: false,
            nsfw: null,
            section: null,
            account_url: null,
            account_id: null,
            is_ad: false,
            in_most_viral: false,
            has_sound: false,
            tags: [],
            ad_type: 0,
            ad_url: '',
            edited: '0',
            in_gallery: false,
            link: 'https://i.imgur.com/mCCrsvV.jpg'
          },
          {
            id: 'hKunMs5',
            title: 'Cashflow',
            description:
              "With the prospect of money raining down on us from helicopters in the near future, it's probably a good idea to learn how to manage all of our newfound wealth.\n\nA game of investment and strategy, CASHFLOW by The Rich Dad Company helps teach fundamentals of wealth building and investment in a fun game. This game tests your financial skills to get you to the top before your friends while sharpening skills to use in real-world applications. CASHFLOW was designed and developed by motivational speaker and renowned entrepreneur Robert Kiyosaki. He designed it to be a fun, interactive tool for learning the fundamentals of finances and wealth. It has new playing cards, an updated game board and a large selection of professions to choose from. Learn in the game and translate your skills to real-life applications.\n\nhttps://tabletophaven.com/cashflow/",
            datetime: 1584561083,
            type: 'image/jpeg',
            animated: false,
            width: 600,
            height: 600,
            size: 59137,
            views: 12261,
            bandwidth: 725078757,
            vote: null,
            favorite: false,
            nsfw: null,
            section: null,
            account_url: null,
            account_id: null,
            is_ad: false,
            in_most_viral: false,
            has_sound: false,
            tags: [],
            ad_type: 0,
            ad_url: '',
            edited: '0',
            in_gallery: false,
            link: 'https://i.imgur.com/hKunMs5.jpg'
          },
          {
            id: 'OZc6GAt',
            title: 'The Oregon Trail Card Game',
            description:
              "Okay, this one is really only relevant because you tend to die from diseases a lot in it. But still, it's just awesome.\n\nFor many people, one of their first memories of playing a video game or using a computer in school is playing the classic game, The Oregon Trail. This game is nostalgic in that way, and for those who want to relive their early gaming years, The Oregon Trail Card Game by Pressman Toy is for you. This game follows the classic style of Oregon Trail in a cooperative style that moves players along the trail, playing Supply Cards to survive the obstacles waiting ahead. This game is intended for 2 to 6 players ages 12 and up and will take around 30 minutes or less to play.\n\nhttps://tabletophaven.com/the-oregon-trail-card-game/",
            datetime: 1584561088,
            type: 'image/jpeg',
            animated: false,
            width: 600,
            height: 600,
            size: 161852,
            views: 8877,
            bandwidth: 1436760204,
            vote: null,
            favorite: false,
            nsfw: null,
            section: null,
            account_url: null,
            account_id: null,
            is_ad: false,
            in_most_viral: false,
            has_sound: false,
            tags: [],
            ad_type: 0,
            ad_url: '',
            edited: '0',
            in_gallery: false,
            link: 'https://i.imgur.com/OZc6GAt.jpg'
          }
        ],
        ad_config: {
          safeFlags: ['album', 'in_gallery', 'gallery'],
          highRiskFlags: [],
          unsafeFlags: ['sixth_mod_unsafe'],
          wallUnsafeFlags: [],
          showsAds: false
        }
      },
      success: true,
      status: 200
    }
  };
  const [state, dispatch] = useReducer(imageReducer, initialState);

  //reload
  const reload = (page1 = 'hot', page2 = 'viral') => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Client-ID ${config.userName}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(
      `https://api.imgur.com/3/gallery/${page1}/${page2}/day/1?showViral=false&mature=true&album_previews=false`,
      requestOptions
    )
      .then(res => res.text())
      .then(res => JSON.parse(res))
      .then(res =>
        dispatch({
          type: RELOAD,
          payload: res.data
        })
      )
      .catch(error => console.log('error', error));
  };
  //start loading
  const setLoading = () => {
    dispatch({
      type: SET_LOADING
    });
  };
  //clear page.
  const clearPage = () => {
    dispatch({
      type: CLEAR_PAGE
    });
  };

  //load album
  const loadAlbum = id => {
    // var myHeaders = new Headers();
    // myHeaders.append('Authorization', `Client-ID ${config.userName}`);
    // var requestOptions = {
    //   method: 'GET',
    //   headers: myHeaders,
    //   redirect: 'follow'
    // };
    // fetch(`https://api.imgur.com/3/album/${id}`, requestOptions)
    //   .then(res => res.text())
    //   .then(res => console.log(res));
  };

  return (
    <ImageContext.Provider
      value={{
        data: state.data,
        loading: state.loading,
        current: state.current,
        reload,
        loadAlbum,
        setLoading,
        clearPage
      }}
    >
      {props.children}
    </ImageContext.Provider>
  );
};

export default ImageState;
