import React from 'react';
import data from 'jsonfolder/data.json';

const statisticList = {
  display: 'flex',
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

const statisticListLi = {
  display: 'flex',
  flexDirection: 'column',
  width: 150,
  textAlign: 'center',
};

const statistics = {
  marginTop: 50,
};

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
    <section style={statistics}>
      {title && <h2 className="title">{title}</h2>}
      <ul style={statisticList} className="stat-list">
        {data.map((stat, index) => (
          <li
            key={index}
            className="item"
            style={{ backgroundColor: getRandomColor(), ...statisticListLi }}
          >
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
