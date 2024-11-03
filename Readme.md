# Dil Foods Inventory Management System

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (v14 or later) and npm
- Python (v3.8 or later)
- PostgreSQL (v12 or later)
- Git

## Installation & Setup

### Frontend Setup

1. Clone the repository

```bash
git clone https://github.com/yourusername/dil-foods-inventory.git
cd dil-foods-inventory/frontend
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm start
```

The application will run on `http://localhost:3000`.

### Backend Setup

1. Navigate to backend directory

```bash
cd ../backend
```

2. Install dependencies

```bash
npm install
```

3. Configure environment variables
   Create a `.env` file in the backend directory:

```env
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_NAME=
DB_PORT=
```

4. Start backend server

```bash
npm start
```

The API will be accessible at `http://localhost:3001`.

### Machine Learning Pipeline Setup

1. Navigate to ML pipeline directory

```bash
cd ../ml-pipeline
```

2. Install dependencies

```bash
pip install -r requirements.txt
```

3. Train the model

```bash
python train_model.py
```

## Running the Application

1. Start frontend

```bash
cd frontend
npm start
```

2. Start backend

```bash
cd ../backend
npm start
```

3. Run ML pipeline

```bash
cd ../ml-pipeline
python train_model.py
```

Access the application at `http://localhost:3000`

## Additional Configuration

### Environment Variables

- Keep `.env` files secure and do not commit them to version control
- Use environment-specific configurations as needed

## Design Choices & Architecture

## Technology Stack

### Frontend: React.js

- Component-based architecture for reusable UI elements
- Rich ecosystem of libraries for complex UI requirements

### Backend: Express.js

- Lightweight and flexible Node.js framework and easy to work with JS frontend
- Easy to set up and configure middleware

### Database: PostgreSQL

- Robust relational database for structured data
- Strong support for complex queries and relationships
- ACID compliance for data integrity

### ML Service: FastAPI

- Separate microservice for ML operations
- High performance Python web framework
- Easy integration with ML libraries (scikit-learn, TensorFlow)

## Architecture Decisions

### Microservices Approach

- Separated ML service for independent scaling
- Easier deployment and maintenance
- Technology-agnostic services

### RESTful API Design

- Clear and consistent endpoint structure
- Scalable and cacheable

Submission by -
Ashish Jain
ashish.ashish.jain591@gmail.com
