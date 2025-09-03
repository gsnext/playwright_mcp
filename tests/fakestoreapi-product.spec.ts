import { test, expect, request } from '@playwright/test';
import Ajv from 'ajv';

test('GET product details from fakestoreapi', async () => {
  const apiUrl = 'https://fakestoreapi.com/products/1';
  const apiRequest = await request.newContext();
  const response = await apiRequest.get(apiUrl);

  // Step 3: Verify status
  expect(response.status()).toBe(200);

  // Step 4: Validate response keys
  const body = await response.json();
  expect(body).toHaveProperty('id');
  expect(body).toHaveProperty('title');
  expect(body).toHaveProperty('price');
  expect(body).toHaveProperty('category');
  expect(body).toHaveProperty('description');

  // Step 5: Optionally validate with JSON Schema
  const schema = {
    type: 'object',
    properties: {
      id: { type: 'number' },
      title: { type: 'string' },
      price: { type: 'number' },
      category: { type: 'string' },
      description: { type: 'string' },
    },
    required: ['id', 'title', 'price', 'category', 'description'],
  };
  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  const valid = validate(body);
  expect(valid).toBe(true);

  // Step 6: Log product title and price
  console.log(`Product: ${body.title}, Price: $${body.price}`);
});
