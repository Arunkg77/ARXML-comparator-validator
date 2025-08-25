# Luxoft Phase 2 – ARXML Semantic Comparator

## Project Overview

This project is part of the **Luxoft University Connect Program (Phase 2)**. It is a tool to compare large **AUTOSAR ARXML files** using their schema (XSD) and generate clear explanations of differences.

---

## Key Features

* Upload `.arxml` and `.xsd` files
* Compare files based on schema, not just text
* Show differences in **Tree view**, **Table view**, and **Text summary**
* AI-based natural language explanation of changes
* Can handle very large files using background processing

---

## Tech Stack

* **Frontend:** React Components
* **Backend:** Django, Celery, Redis
* **Database:** SQLite
* **Parsing:** Python libraries (`lxml`, `xmlschema`)
* **AI Models:** Gemini 1.5 Pro (main), LLaMA 3 (fallback)

---

## Repository Structure

```
luxoft-phase2-arxml-comparator/
│── backend/         # Django backend code
│── frontend/        # UI templates or React code
│── docs/            # Documentation and flow diagrams
│── tests/           # Unit and integration tests
│── samples/         # Sample ARXML and XSD files
│── requirements.txt # Python dependencies
│── README.md        # Project overview
```

---

## How It Works

1. User uploads two ARXML files (and optional XSD).
2. Django saves them on disk and starts a Celery task.
3. The task parses and compares the files.
4. AI generates a summary of the differences.
5. The results are shown to the user in Tree, Table, and Text formats.


---

## References

* Luxoft Requirements Docs
* Gemini API Docs
* Django Documentation
* Celery + Redis Guide
