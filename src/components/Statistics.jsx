import React from 'react';
import data from 'jsonfolder/data.json';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StatisticList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StatisticListLi = styled.li`
  display: flex;
  flex-direction: column;
  width: 150px;
  text-align: center;
`;

const StatisticsSection = styled.section`
  margin-top: 50px;
`;

export const Statistics = ({ title }) => {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <StatisticsSection>
      {title && <h2 className="title">{title}</h2>}
      <StatisticList>
        {data.map((stat, index) => (
          <StatisticListLi
            key={index}
            className="item"
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </StatisticListLi>
        ))}
      </StatisticList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};
