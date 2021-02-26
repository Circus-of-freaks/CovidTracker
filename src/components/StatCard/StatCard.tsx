import React from 'react';

import './StatCard.css';
import icon from './pandemic_icon.jpg';

interface StatCardProps {
  title: string;
  number: number;
  newCases?: number;
}

function StatCard({ title, number, newCases }: StatCardProps) {
    return (
      <div className="stat-card">
        <img
          className="stat-card__image"
          src={icon}
          alt="Не удалось загрузить картинку"
      />
        <small className="stat-card__title">{title}</small>
        <h2 className="stat-card__number">{number}</h2>
        <small className="stat-card__new-cases">
          {newCases ? `+${newCases}` : ''}
        </small>
      </div>
    );
}

export default StatCard;
