import React, { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Очищення помилки при введенні
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = "Ім'я користувача обов'язкове";
    } else if (formData.username.length < 3) {
      newErrors.username = "Ім'я користувача має бути не менше 3 символів";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email обов'язковий";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Будь ласка, введіть правильний email";
    }
    
    if (!formData.password) {
      newErrors.password = "Пароль обов'язковий";
    } else if (formData.password.length < 6) {
      newErrors.password = "Пароль має бути не менше 6 символів";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    setMessage("");
    
    try {
      const res = await axios.post('http://localhost:5000/api/register', formData);
      
      if (res.data.success) {
        setMessage(res.data.message);
        setFormData({ username: '', email: '', password: '' });
        setErrors({});
      } else {
        setMessage(res.data.message || 'Сталася помилка');
      }
    } catch (err) {
      if (err.response?.data?.errors) {
        // Обробка помилок валідації з сервера
        const serverErrors = {};
        err.response.data.errors.forEach(error => {
          serverErrors[error.path] = error.msg;
        });
        setErrors(serverErrors);
        setMessage('Будь ласка, виправте помилки в формі');
      } else {
        setMessage(err.response?.data?.message || 'Сталася помилка під час реєстрації');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="form-header">
        <h1>Реєстрація</h1>
        <p>Створіть свій акаунт для доступу до системи</p>
      </div>
      
      {message && (
        <div className={`message ${message.includes('успішно') ? 'success' : 'error'}`}>
          {message}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Ім'я користувача</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Введіть ім'я користувача"
            value={formData.username}
            onChange={handleChange}
            className={errors.username ? 'error' : ''}
          />
          {errors.username && <span className="error-text">{errors.username}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Введіть ваш email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Введіть пароль"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? 'error' : ''}
          />
          {errors.password && <span className="error-text">{errors.password}</span>}
        </div>
        
        <button 
          type="submit" 
          className="btn" 
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className="loading"></span>
              Реєстрація...
            </>
          ) : (
            'Зареєструватися'
          )}
        </button>
      </form>
      
      <div className="form-footer">
        <p>
          Вже маєте акаунт? <a href="#login">Увійти</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
