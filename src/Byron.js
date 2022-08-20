import React from "react";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';

import FlipCard from "./FlipCard";
import * as sliderSettings from "./sliderSettings.js"
import InfoBox from "./InfoBox";
import GenericCard from "./GenericCard";

const Byron = () => {
  const playerRaces = [
    {
      id: "1",
    },
  ];
  const RaceData = [
    {
      id: "1",
      InfoCard: {
      /// info card 
      //info card title
      title: "Chillmarrow",
      mainTitle: "races of byron",
      titleStyle: "Byron-title-1",
      subtitleStyle: "Byron-subtitle-1",
      desc: "Honorable and stoic, the Chillmarrow are as uncompormising as the ice they call home. ",

      //info card descriptions
      descriptionTitleStyle: "Byron-description-title-1",
      descriptionStyle: "Byron-description-1",

      descriptionTitle1: "Frozen Gills",
      description1: "Millennia of evolution have prepared the Chillmarrow to swim breath and live beneath the slushy ice of the swamp. Their skin secretes a special viscous liquid which causes the ice around them to temporarily revert to its liquid form. This gives the chillmarrow the unique ability to \"swim\" through ice. ",

      descriptionTitle2: "Meltwater Swamp",
      description2: "The Chillmarrow live in Meltwater Swamp, a desolate frozen swampland in the north west of Byron. They live primarily as ice fishermen collecting the plants and animals which can survive in the frozen swamp to survive. They live in small tribal units which meet frequently to share stories and tea with each other.", descriptionStyle: "Byron-description-1",

      descriptionTitle3: "Strength and Honor",
      description3: " The feircely individualist Chillmarrow value nothing as highly as their honor. Their intense focus on honor gives them a reputation as strict stoic, uncompromising yet very dependable. Although Chillmarrow tend to keep to themselves they enjoy a good reputation among the other races in the System.",

      descriptionTitle4: "Abilities and Drawbacks",
      abilityTitle1: "Aquatic Adaptations: ",
      abilityTitle2: " Marsh Walker: ",
      drawbackTitle1: "Cold Feet: ",

      //info card bullets
      bulletStyle: "Byron-bullets-1",
      ability1: "Gain a swim speed equal to your land movment speed. Gain the ability to breath underwater permanently per the spell Water Breathing.",
      ability2: "Gain the Ability to earth glide, per the spell Earth Glide through any frozen liquid.",
      drawback1: "Cannot exceed 30ft of movement (on land) in any turn. This penalty includes movment from 5ft steps, charge attacks and the run action",

      },
      RaceCard: {
        frontStyle: "Byron-front-1",

        backgroundStyle: "Byron-bg",
        titleStyle: "Byron-title-1",
        title: "CHILLMARROW",

        strStyle: "shape-outer-green octagon",
        dexStyle: "shape-outer-green octagon",
        conStyle: "shape-outer-green octagon",
        intStyle: "shape-outer-red octagon",
        wisStyle: "shape-outer-green octagon",
        chaStyle: "shape-outer-red octagon",

        imageStyle: "Byron-image-style",
        imageLink: "https://i.imgur.com/8hpqSLm.png",

        descriptionTitleStyle: "Byron-description-title-1",
        descriptionTitle1: "Traits",
        iconStyle: "Byron-icon",
        iconTitleStyle: "Byron-icon-title",
        traitTitle1: "Aquatic Adaptations",
        traitIcon1: "https://i.imgur.com/oTcgXuW.png",
        traitTitle2:"Marsh Walker",
        traitIcon2: "https://i.imgur.com/h5UJwdD.png",

        descriptionTitle2: "Drawbacks",
        drawbackTitle1: "Cold Feet",
        drawbackIcon1: "https://i.imgur.com/fC0cfDR.png"

      }
    },
    {
      id: "2",
      InfoCard: {
      /// info card 
      //info card title
      title: "Dominae",
      mainTitle: "races of byron",
      titleStyle: "Byron-title-1",
      subtitleStyle: "Byron-subtitle-1",
      desc: "The children of fate, aristocratic Dominae rule the harsh lands of Byron",

      //info card descriptions
      descriptionTitleStyle: "Byron-description-title-1",
      descriptionStyle: "Byron-description-1",

      descriptionTitle1: "Genetic Lottery",
      description1: "Every child born in Byron has a chance to be born as a dominae or a filus regardless of their parents. Dominae are larger, smarter and stronger than their Filus counterparts. When a Dominae child is born they are taken away from their family and integrated into a noble House where they are prepared for a life as a leader in Byron. Despite all of the advantages enjoyed by the Dominae they are often stricken by pestilance, disease or poison.",

      descriptionTitle2: "Harsh Protectors",
      description2: "Only around two percent of Byrons population are born as Dominae. Although they are few, thier superior training and advantageous genetics allow them to easily rule Byron. In the interest of preventing conflict power is gaurded very tightly and is only given to the most capable Dominae. While they rule with an iron fist they keep a harsh stability which keeps everyone safe in the most deadly plane in the cycle.", descriptionStyle: "Byron-description-1",

      descriptionTitle3: "The Pleasure Dome",
      description3: "Any violence outside the pleasure dome is punishable by death. Duels are heald at the Pleasure Dome to settle any conflict between Dominae houses. They can be fought with any rules that are mutually agreed upon by both houses, or if none are agreed upon simply default to a simple 1v1 to the death. Following the duel the winning house dicates terms upon the losing house, or in rare cases may choose to slaughter the house completely.",

      descriptionTitle4: "Abilities and Drawbacks",
      abilityTitle1: "Born To Lead: ",
      ability1: "Gain one teamwork feat which can be used with all allies regardless of if they have the feat or the feat prerequisites.",

      abilityTitle2: "Peerless: ",
      ability2: "Take a +2 in any stat of your choosing after setting normal stats.",

      drawbackTitle1: "Genetic Heritage: ",
      drawback1: "Base Fortitude save is set to 0 for all class levels.",

      //info card bullets
      bulletStyle: "Byron-bullets-1",

      },
      RaceCard: {
        frontStyle: "Byron-front-1",

        backgroundStyle: "Byron-bg",
        titleStyle: "Byron-title-1",
        title: "Dominae",

        strStyle: "shape-outer-green octagon",
        dexStyle: "shape-outer-green octagon",
        conStyle: "shape-outer-red octagon",
        intStyle: "shape-outer-green octagon",
        wisStyle: "shape-outer-green octagon",
        chaStyle: "shape-outer-green octagon",

        imageStyle: "Byron-image-style",
        imageLink: "https://i.imgur.com/VLM9ydw.png",

        descriptionTitleStyle: "Byron-description-title-1",
        descriptionTitle1: "Traits",
        iconStyle: "Byron-icon",
        iconTitleStyle: "Byron-icon-title",
        traitTitle1:"Born to lead ",
        traitIcon1: "https://i.imgur.com/umSIzXx.png",
        traitTitle2: "Peerless",

        traitIcon2: "https://i.imgur.com/8zIRN4s.png",
        descriptionTitle2: "Drawbacks",
        drawbackTitle1: "Genetic Herritage",
        drawbackIcon1: "https://i.imgur.com/8aZtYtA.png"
      }
    },
    {
      id: "3",
      InfoCard: {
      /// info card 
      //info card title
      title: "Filus",
      mainTitle: "races of byron",
      titleStyle: "Byron-title-1",
      subtitleStyle: "Byron-subtitle-1",
      desc: "The people of the land, the humble Filus are the backbone of Byron",

      //info card descriptions
      descriptionTitleStyle: "Byron-description-title-1",
      descriptionStyle: "Byron-description-1",

      descriptionTitle1: "Genetic Lottery",
      description1: "Every child born in Byron has a chance to be born as a dominae or a filus regardless of their parents. Filus make up around ninety eight percent of the population of Byron. Filus are typically shorter and stockier than Dominae with much better adaptations to the blistering cold of Byron. ",

      descriptionTitle2: "Great Houses",
      description2: "Filus typically work in return for wages in service to one of the great houses. Some work on the farming colonies south of the Silent River braving the hordes of undead and unnerving tounge eaters to produce the food necisary to sustain life on byron. Others work in the vidrium mines near Alms Peak to produce a valuble magical crafting reagent. While others still work as clerks, clergymen or merchants in the city.", descriptionStyle: "Byron-description-1",

      descriptionTitle3: "The Pleasure Dome",
      description3: "Any violence outside the pleasure dome is punishable by death. Duels are held regularly for Filus' to settle their differences. Filus duels are always to settle a specific disagreement which must be registered by a dominae magistrate. Although a dominae could choose to challenge a Filus to a duel, Filus are not permitted to challenge a Dominae.  ",

      descriptionTitle4: "Abilities and Drawbacks",
      abilityTitle1: "Hardy Folk: ",
      ability1: "When Rolling HP, roll with a larger hit dice than normal. d6->d8, d8->d10, d10->d12 d12-2d8.",

      abilityTitle2: "Warm Blooded: ",
      ability2: "Gain Damage Reistance 5 to cold, as well as immunity to freezing effects.",

      drawbackTitle1: "Low Born: ",
      drawback1: "-2 Will save count as one size category smaller for CMD.",

      //info card bullets
      bulletStyle: "Byron-bullets-1",

      },
      RaceCard: {
        frontStyle: "Byron-front-1",

        backgroundStyle: "Byron-bg",
        titleStyle: "Byron-title-1",
        title: "Filus",

        strStyle: "shape-outer-green octagon",
        dexStyle: "shape-outer-green octagon",
        conStyle: "shape-outer-green octagon",
        intStyle: "shape-outer-red octagon",
        wisStyle: "shape-outer-green octagon",
        chaStyle: "shape-outer-green octagon",

        imageStyle: "Byron-image-style",
        imageLink: "https://i.imgur.com/nxlmWKo.png",

        descriptionTitleStyle: "Byron-description-title-1",
        descriptionTitle1: "Traits",
        iconStyle: "Byron-icon",
        iconTitleStyle: "Byron-icon-title",
        traitTitle1:"Hardy Folk",
        traitIcon1: "https://i.imgur.com/XkYv3uj.png",
        traitTitle2: "Warm Blooded",
        traitIcon2: "https://i.imgur.com/em3O4g1.png",

        descriptionTitle2: "Drawbacks",
        drawbackTitle1: "Low Born",
        drawbackIcon1: "https://i.imgur.com/20zYP0l.png"
      }
    },
  ];


  return (


    <div>
      <AwesomeSlider className="App" style={sliderSettings.sliderSettings} fillParent={true}>
        {RaceData.map(function (entries, i) {
          return <div className="Content">
            <div className="bg-img" ></div>
            <div className="Page-left">
                <GenericCard key={i} card={entries.RaceCard} />
            </div>
            <div className="Page-center">
              <div className="Byron-main-title">races of byron</div>
              <InfoBox key={i} info={entries.InfoCard} />
            </div>
          </div>;
        })}
      </AwesomeSlider>
    </div>
  );
};
export default Byron;