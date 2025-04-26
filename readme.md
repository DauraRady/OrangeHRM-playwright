# 🧪 OrangeHRM Automated QA Suite – Playwright (Typescript)

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

🗂️ Structure du projet

```
orangehrm-tests/
│
├── tests/                # Scénarios E2E (Playwright Test)
│   ├── login.spec.ts
│   ├── leave.spec.ts
│   └── pim.spec.ts
│
├── pages/                # Page Object Model (POM)
│   ├── LoginPage.ts
│   ├── DashboardPage.ts
│   └── LeavePage.ts
│
├── utils/                # Helpers réutilisables
│   ├── testData.ts
│   └── wait.ts
│
├── data/                 # Fixtures JSON / CSV
│   └── users.json
│
├── playwright.config.ts  # Config globale (baseURL, devices…)
├── package.json          # Scripts NPM
└── README.md             # Ce fichier 🤓
```
