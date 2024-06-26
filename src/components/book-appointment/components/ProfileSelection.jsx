import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  Slide,
  Slider,
} from 'pure-react-carousel';

import { ArrowDownIcon } from '@radix-ui/react-icons';
import listOfProfessionals from '@/components/book-appointment/data/listOfProfessionals.js';
import { normaliseArrayToSentence, sanitisePhoneNumber } from '../functions';

import 'pure-react-carousel/dist/react-carousel.es.css';
import '../styles/profile-selection.scss';

function ProfileSelection({
  profileList,
  updateSelectedProfile,
  selectedProfile,
}) {
  const INITIAL_SLIDE = 0;
  const [currentSlide, setCurrentSlide] = useState(INITIAL_SLIDE);

  useEffect(() => {
    updateSelectedProfile(profileList[INITIAL_SLIDE]);
  }, []);

  const onButtonBack = () => {
    setCurrentSlide(currentSlide - 1);
    updateSelectedProfile(profileList[currentSlide - 1]);
  };

  const onButtonNext = () => {
    setCurrentSlide(currentSlide + 1);
    updateSelectedProfile(profileList[currentSlide + 1]);
  };

  return (
    <>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={20}
        totalSlides={profileList.length}
        orientation="horizontal"
        dragEnabled={false}
        touchEnable={false}
        visibleSlides={1}
        step={1}
        lockOnWindowScroll
        currentSlide={currentSlide}
      >
        <div className="carousel-container">
          <Slider className="slider-container">
            {profileList.map(({ name, title, img }, index) => (
              <Slide
                className="slider-item"
                key={name + img.toString()}
                index={index}
              >
                <div className="profile">
                  <img
                    className="profile-img"
                    src={img}
                    alt={`${name}-profile`}
                  />
                  <div className="profile-info">
                    <h4 className="profile-name">{name}</h4>
                    <h5 className="profile-title">{title}</h5>
                  </div>
                </div>
              </Slide>
            ))}
          </Slider>

          <ButtonBack
            className="button-back left !stroke-black"
            onClick={() => {
              onButtonBack();
            }}
          >
            <ArrowDownIcon />
          </ButtonBack>
          <ButtonNext
            className="button-next right !stroke-black"
            onClick={() => {
              onButtonNext();
            }}
          >
            <ArrowDownIcon />
          </ButtonNext>
        </div>
        <DotGroup className="dot-group" />
      </CarouselProvider>

      {/* {currentSlide} */}

      <div className="big-profile">
        <div className="bp-section">
          <div className="flex justify-start text-xl pb-2  ">
            <h3 className="font-semibold">Background</h3>
          </div>
          <div className="bps-body">
            <p className="background">{selectedProfile.background}</p>
          </div>
        </div>
        <div className="bp-section">
          <div className="flex justify-start text-xl pb-2 font-semibold">
            <h3>Spoken language</h3>
          </div>
          <div className="bps-body !text-left">
            <p>{normaliseArrayToSentence(selectedProfile.language)}</p>
          </div>
        </div>
        <div className="bp-section">
          <div className="flex justify-start text-xl pb-2 font-semibold">
            <h3>Education</h3>
          </div>
          <div className="bps-body">
            {selectedProfile.education.map(({ school, degree, year }) => (
              <div key={school + degree + year} className="education-item">
                <div className="ei-info !text-left">
                  <h4>{school}</h4>
                  <p>{degree}</p>
                </div>
                <div className="ei-date">
                  <p>{year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bp-section">
          <div className="flex justify-start text-xl pb-2  ">
            <h3 className="font-semibold">Contact</h3>
          </div>
          <div className="bps-body !text-left">
            <a
              href={`tel:${sanitisePhoneNumber(selectedProfile.contactNumber)}`}
            >
              {profileList[currentSlide].contactNumber}
            </a>
          </div>
        </div>

        <div className="bp-section">
          <div className="flex justify-start text-xl pb-2  ">
            <h3 className="font-semibold">Available Hours</h3>
          </div>
          <div className="bps-body !text-left">
            <table>
              {selectedProfile.schedule.map(({ day, startTime, endTime }) => (
                <tr key={day + startTime}>
                  <td>
                    <p>{day}</p>
                  </td>
                  <td className="!text-left">
                    <p>
                      {`
                          ${startTime} - 
                          ${endTime}
                        `}
                    </p>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>

        <div className="bp-section">
          <div className="flex justify-start text-xl pb-2  ">
            <h3 className="font-semibold">Prices</h3>
          </div>
          <div className="bps-body !text-left">
            <table>
              <tr>
                <td>
                  <p>Consultation (30min)</p>
                </td>
                <td>
                  <p className="price">{`$${selectedProfile.priceFor30min}`}</p>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileSelection;

ProfileSelection.defaultProps = {
  profileList: listOfProfessionals,
};

ProfileSelection.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  profileList: PropTypes.arrayOf(PropTypes.object),
  updateSelectedProfile: PropTypes.func.isRequired,
  selectedProfile: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    title: PropTypes.string,
    contactNumber: PropTypes.string,
    img: PropTypes.string,
    priceFor30min: PropTypes.number,
    background: PropTypes.string,
    language: PropTypes.arrayOf(PropTypes.string),
    education: PropTypes.arrayOf(
      PropTypes.shape({
        school: PropTypes.string,
        degree: PropTypes.string,
        year: PropTypes.string,
      }),
    ),
    schedule: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.string,
        startTime: PropTypes.string,
        endTime: PropTypes.string,
      }),
    ),
  }).isRequired,
};
