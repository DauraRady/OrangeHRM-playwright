# 🧪 OrangeHRM Automated QA Suite – Playwright (Python)

Projet de tests automatisés end-to-end pour le site OrangeHRM, basé sur la stratégie de test experte décrite dans le document de référence.

## 🚀 Objectifs

- Valider les fonctionnalités critiques de gestion RH (login, PIM, congés, punch)
- Automatiser les parcours clés avec Playwright + Python
- Intégrer les tests dans un pipeline CI/CD (GitHub Actions ou GitLab CI)
- Fournir des rapports de campagne clairs (HTML + screenshots)

---

## 🧰 Stack Technique

| Outil                | Rôle                               |
| -------------------- | ---------------------------------- |
| `Playwright`         | Moteur de test E2E multiplateforme |
| `Python`             | Langage de scripting principal     |
| `Pytest`             | Framework de test (runner)         |
| `pytest-html`        | Génération de rapports             |
| `GitHub Actions`     | CI/CD (intégration continue)       |
| `TestRail` ou `Xray` | Gestion de campagne (optionnel)    |

---

## 📁 Structure du projet

```bash
orangehrm-tests/
│
├── tests/                  # Cas de test (pytest)
│   ├── test_login.py
│   ├── test_leave.py
│   └── test_pim.py
│
├── pages/                 # Page Object Model
│   ├── login_page.py
│   ├── dashboard_page.py
│   └── leave_page.py
│
├── utils/                 # Fonctions utilitaires (config, waits…)
│   └── helpers.py
│
├── data/                  # Jeux de données de test
│   └── users.json
│
├── conftest.py            # Hooks pytest (browser, base_url…)
├── pytest.ini             # Configuration générale
└── README.md              # Ce fichier
```
