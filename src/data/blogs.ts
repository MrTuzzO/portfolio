
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  tags: string[];
  readTime: number;
}

const blogsData: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Django REST Framework",
    excerpt: "Learn the basics of creating RESTful APIs with Django REST Framework.",
    content: `
# Getting Started with Django REST Framework

Django REST Framework (DRF) is a powerful and flexible toolkit for building Web APIs in Django. If you're already familiar with Django and want to build APIs, DRF is the perfect choice.

## What is Django REST Framework?

Django REST Framework is a third-party package that works with Django to create robust APIs. It provides tools like serializers, viewsets, and authentication classes that make API development easier and faster.

## Setting Up Your Environment

First, let's set up a new Django project and install Django REST Framework:

\`\`\`bash
# Create a virtual environment
python -m venv env
source env/bin/activate  # On Windows: env\\Scripts\\activate

# Install Django and Django REST Framework
pip install django djangorestframework

# Create a new Django project
django-admin startproject myproject
cd myproject
python manage.py startapp myapi
\`\`\`

Add 'rest_framework' and your new app to INSTALLED_APPS in settings.py:

\`\`\`python
INSTALLED_APPS = [
    # ...
    'rest_framework',
    'myapi',
]
\`\`\`

## Creating Models

Let's create a simple model in myapi/models.py:

\`\`\`python
from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    publication_date = models.DateField()
    isbn = models.CharField(max_length=13, unique=True)
    
    def __str__(self):
        return self.title
\`\`\`

## Creating Serializers

Serializers convert complex data like querysets and model instances into Python datatypes that can be easily rendered into JSON, XML, or other content types. Create a new file myapi/serializers.py:

\`\`\`python
from rest_framework import serializers
from .models import Book

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'title', 'author', 'publication_date', 'isbn']
\`\`\`

## Creating Views

Now, let's create views in myapi/views.py:

\`\`\`python
from rest_framework import viewsets
from .serializers import BookSerializer
from .models import Book

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
\`\`\`

## Setting Up URLs

Create myapi/urls.py:

\`\`\`python
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BookViewSet

router = DefaultRouter()
router.register(r'books', BookViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
\`\`\`

And update the project's urls.py:

\`\`\`python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('myapi.urls')),
]
\`\`\`

## Running Migrations and Starting the Server

\`\`\`bash
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser  # Follow the prompts
python manage.py runserver
\`\`\`

## Testing Your API

You can now access your API at http://localhost:8000/api/books/

Django REST Framework provides a browsable API, so you can interact with your API directly in the browser.

## Conclusion

This is just the beginning of what you can do with Django REST Framework. It offers many more features like authentication, permissions, throttling, and pagination.

In future posts, we'll explore more advanced topics like nested serializers, custom permissions, and using ViewSets for complex operations.
    `,
    image: "/placeholder.svg",
    author: "tuzzi",
    date: "2023-12-15",
    tags: ["Django", "REST API", "Backend", "Python"],
    readTime: 8
  },
  {
    id: 2,
    title: "Understanding JWT Authentication in Web Applications",
    excerpt: "Learn how JWT authentication works and how to implement it in your web applications.",
    content: `
# Understanding JWT Authentication in Web Applications

JSON Web Tokens (JWT) have become an industry standard for handling authentication in modern web applications. In this post, we'll dive into what JWTs are and how to implement them in your projects.

## What is JWT?

JWT is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.

## Structure of a JWT

A JWT consists of three parts separated by dots (.):

1. Header
2. Payload
3. Signature

So a JWT typically looks like this: xxxxx.yyyyy.zzzzz

### Header

The header typically consists of two parts: the type of token, which is JWT, and the signing algorithm being used, such as HMAC SHA256 or RSA.

\`\`\`json
{
  "alg": "HS256",
  "typ": "JWT"
}
\`\`\`

### Payload

The second part of the token is the payload, which contains the claims. Claims are statements about an entity (typically, the user) and additional data.

\`\`\`json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true,
  "iat": 1516239022
}
\`\`\`

### Signature

To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that.

\`\`\`javascript
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
\`\`\`

## Implementing JWT Authentication in Django

Let's look at how to implement JWT authentication in a Django REST Framework project.

### Installation

First, install the required package:

\`\`\`bash
pip install djangorestframework-simplejwt
\`\`\`

### Configuration

Add Simple JWT to your Django REST Framework settings:

\`\`\`python
# settings.py
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
}

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=5),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=1),
    'ROTATE_REFRESH_TOKENS': False,
    'BLACKLIST_AFTER_ROTATION': True,
    'ALGORITHM': 'HS256',
    'SIGNING_KEY': SECRET_KEY,
    'VERIFYING_KEY': None,
    'AUTH_HEADER_TYPES': ('Bearer',),
    'USER_ID_FIELD': 'id',
    'USER_ID_CLAIM': 'user_id',
    'AUTH_TOKEN_CLASSES': ('rest_framework_simplejwt.tokens.AccessToken',),
    'TOKEN_TYPE_CLAIM': 'token_type',
}
\`\`\`

### URL Configuration

Add the JWT views to your URLs:

\`\`\`python
# urls.py
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    # ...
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # ...
]
\`\`\`

### Using JWT in Your Views

Now you can protect your views with JWT authentication:

\`\`\`python
# views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

class ProtectedView(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        return Response({"message": "This is a protected view"})
\`\`\`

## Client-Side Usage

On the client side, you'll need to include the JWT in your API requests:

\`\`\`javascript
// Example with fetch
fetch('https://api.example.com/protected-endpoint/', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer ' + jwtToken
  }
})
.then(response => response.json())
.then(data => console.log(data));
\`\`\`

## Security Considerations

While JWTs are secure when implemented correctly, there are some important considerations:

1. Store tokens securely (e.g., HttpOnly cookies)
2. Use HTTPS to prevent token interception
3. Set appropriate expiration times
4. Don't store sensitive data in the payload
5. Consider implementing token refresh mechanisms

## Conclusion

JWT provides a robust solution for authentication in modern web applications. It's stateless nature makes it particularly suitable for APIs and microservices architectures.

In future posts, we'll explore more advanced topics like token refresh strategies and handling JWT with React and other frontend frameworks.
    `,
    image: "/placeholder.svg",
    author: "tuzzi",
    date: "2024-01-20",
    tags: ["Authentication", "Security", "JWT", "Web Development"],
    readTime: 10
  },
  {
    id: 3,
    title: "Building Responsive UI with Tailwind CSS",
    excerpt: "Learn how to create beautiful responsive interfaces using Tailwind CSS.",
    content: `
# Building Responsive UI with Tailwind CSS

Tailwind CSS has revolutionized the way we build user interfaces on the web. In this post, we'll explore how to create responsive designs efficiently using Tailwind CSS.

## What is Tailwind CSS?

Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML. Instead of pre-designed components, Tailwind provides low-level utility classes that let you build completely custom designs.

## Setting Up Tailwind CSS

Let's start by setting up Tailwind CSS in a new project:

\`\`\`bash
# Create a new project directory
mkdir tailwind-project
cd tailwind-project

# Initialize npm
npm init -y

# Install Tailwind CSS and its dependencies
npm install tailwindcss postcss autoprefixer

# Initialize Tailwind CSS
npx tailwindcss init -p
\`\`\`

Configure your tailwind.config.js file:

\`\`\`javascript
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
\`\`\`

Create a CSS file (src/input.css) with the Tailwind directives:

\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;
\`\`\`

## Responsive Design with Tailwind

Tailwind makes responsive design easy with its built-in breakpoint prefixes:

- \`sm\`: Small screens (640px and up)
- \`md\`: Medium screens (768px and up)
- \`lg\`: Large screens (1024px and up)
- \`xl\`: Extra large screens (1280px and up)
- \`2xl\`: 2X Extra large screens (1536px and up)

Let's create a responsive layout:

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Tailwind Layout</title>
  <link href="./dist/output.css" rel="stylesheet">
</head>
<body class="bg-gray-100">
  <div class="container mx-auto px-4 py-8">
    <!-- Responsive Header -->
    <header class="mb-10">
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
        Responsive Tailwind Demo
      </h1>
      <p class="mt-4 text-center text-gray-600 text-lg md:text-xl">
        Learn how to build responsive layouts with Tailwind CSS
      </p>
    </header>
    
    <!-- Responsive Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Card 1 -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-2">Card Title 1</h2>
        <p class="text-gray-600">
          This card will stack on mobile and align in a grid on larger screens.
        </p>
      </div>
      
      <!-- Card 2 -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-2">Card Title 2</h2>
        <p class="text-gray-600">
          Tailwind makes it easy to create responsive layouts.
        </p>
      </div>
      
      <!-- Card 3 -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-2">Card Title 3</h2>
        <p class="text-gray-600">
          Just add responsive prefixes to your utility classes.
        </p>
      </div>
    </div>
    
    <!-- Responsive Navigation -->
    <nav class="mt-12 flex flex-col md:flex-row justify-center items-center gap-4">
      <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors">
        Home
      </a>
      <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors">
        About
      </a>
      <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors">
        Services
      </a>
      <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors">
        Contact
      </a>
    </nav>
  </div>
</body>
</html>
\`\`\`

## Building a Responsive Component

Let's create a responsive card component:

\`\`\`html
<!-- Feature Card Component -->
<div class="p-4">
  <div class="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
    <div class="w-full md:w-1/3">
      <img 
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
        alt="Coding" 
        class="w-full h-48 md:h-full object-cover"
      >
    </div>
    <div class="p-6 w-full md:w-2/3">
      <h3 class="text-xl font-bold mb-2">Build Faster with Tailwind</h3>
      <p class="text-gray-600 mb-4">
        Tailwind lets you build modern websites without ever leaving your HTML. 
        It's utility classes help you work faster and keep your codebase clean.
      </p>
      <div class="flex flex-wrap gap-2">
        <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Responsive</span>
        <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Customizable</span>
        <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Modern</span>
      </div>
    </div>
  </div>
</div>
\`\`\`

## Tips for Effective Responsive Design with Tailwind

1. **Mobile-first approach**: Tailwind is designed for mobile-first development. Start with the base styles (no prefix) for mobile, then add responsive variants for larger screens.

2. **Customize breakpoints**: You can customize breakpoints in your tailwind.config.js:

\`\`\`javascript
module.exports = {
  // ...
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      // Add custom breakpoints
      'tablet': '992px',
    }
  }
}
\`\`\`

3. **Extract components**: For reusable UI patterns, consider extracting components using @apply:

\`\`\`css
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors;
  }
}
\`\`\`

4. **Use container queries**: For more granular control, consider using the Container Queries plugin:

\`\`\`bash
npm install @tailwindcss/container-queries
\`\`\`

## Conclusion

Tailwind CSS provides a powerful and intuitive way to build responsive designs. By using its responsive prefixes and utility classes, you can create beautiful interfaces that work well on any screen size without writing custom media queries.

In future posts, we'll explore more advanced Tailwind techniques like creating dark mode toggles and building complex layouts.
    `,
    image: "/placeholder.svg",
    author: "tuzzi",
    date: "2024-02-05",
    tags: ["Tailwind CSS", "Frontend", "Responsive Design", "CSS"],
    readTime: 7
  }
];

export default blogsData;
