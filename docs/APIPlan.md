# JavaVerse API Plan

## Authentication

POST /api/auth/register

POST /api/auth/login

POST /api/auth/logout

---

## User

GET /api/users/profile

PUT /api/users/profile

GET /api/users/progress

---

## Worlds

GET /api/worlds

GET /api/worlds/{id}

---

## Missions

GET /api/missions

GET /api/missions/{id}

POST /api/missions/complete

---

## Java Learning

GET /api/topics

GET /api/questions

POST /api/questions/submit

GET /api/challenges

POST /api/challenges/submit

---

## Inventory

GET /api/inventory

POST /api/inventory/equip

---

## Weapons

GET /api/weapons

POST /api/weapons/unlock

---

## Rewards

POST /api/rewards

GET /api/rewards/history

---

## Leaderboard

GET /api/leaderboard

---

## AI Teacher

POST /api/ai/chat

POST /api/ai/hint

POST /api/ai/explain