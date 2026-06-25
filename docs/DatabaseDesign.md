# JavaVerse Database Design

## Database Name

javaverse_db

---

## Tables

### 1. users

Purpose:
Stores player account information.

Fields:
- user_id
- username
- email
- password
- level
- xp
- coins
- current_world
- created_at

---

### 2. characters

Purpose:
Stores available game characters.

Fields:
- character_id
- character_name
- health
- attack
- defense
- speed
- image

---

### 3. worlds

Purpose:
Stores game worlds.

Fields:
- world_id
- world_name
- description
- difficulty
- unlock_level

---

### 4. missions

Purpose:
Stores missions of each world.

Fields:
- mission_id
- world_id
- mission_name
- mission_type
- reward_xp
- reward_coins

---

### 5. java_topics

Purpose:
Stores Java learning topics.

Fields:
- topic_id
- topic_name
- difficulty
- description

---

### 6. quiz_questions

Purpose:
Stores Java quiz questions.

Fields:
- question_id
- topic_id
- question
- option_a
- option_b
- option_c
- option_d
- correct_answer

---

### 7. coding_challenges

Purpose:
Stores coding challenges.

Fields:
- challenge_id
- topic_id
- title
- description
- sample_input
- sample_output

---

### 8. inventory

Purpose:
Stores player's items.

Fields:
- inventory_id
- user_id
- weapon_id
- armor_id
- quantity

---

### 9. weapons

Purpose:
Stores all weapons.

Fields:
- weapon_id
- weapon_name
- damage
- rarity
- unlock_level

---

### 10. achievements

Purpose:
Stores achievements.

Fields:
- achievement_id
- achievement_name
- reward

---

### 11. leaderboard

Purpose:
Stores ranking.

Fields:
- rank_id
- user_id
- total_xp
- rank

---

### 12. ai_chat

Purpose:
Stores AI conversation history.

Fields:
- chat_id
- user_id
- question
- answer
- created_at