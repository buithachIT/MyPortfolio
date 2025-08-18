# EmailJS Setup Guide

Để form contact có thể gửi email về `buithach.it@gmail.com`, bạn cần setup EmailJS:

## 1. Đăng ký EmailJS

1. Truy cập [EmailJS](https://www.emailjs.com/)
2. Đăng ký tài khoản miễn phí
3. Xác nhận email

## 2. Tạo Email Service

1. Vào **Email Services** trong dashboard
2. Click **Add New Service**
3. Chọn **Gmail** hoặc **Outlook**
4. Đăng nhập với email `buithach.it@gmail.com`
5. Lưu lại **Service ID** (ví dụ: `service_abc123`)

## 3. Tạo Email Template

1. Vào **Email Templates**
2. Click **Create New Template**
3. Sử dụng template sau:

```html
Subject: New Contact Message from {{from_name}} Name: {{from_name}} Email:
{{from_email}} Message: {{message}} --- This message was sent from your
portfolio contact form.
```

4. Lưu lại **Template ID** (ví dụ: `template_xyz789`)

## 4. Lấy Public Key

1. Vào **Account** > **API Keys**
2. Copy **Public Key**

## 5. Cập nhật Code

Thay thế các giá trị trong file `src/components/contact/contact.tsx`:

```typescript
const serviceId = "service_your_service_id"; // Thay bằng Service ID thực
const templateId = "template_your_template_id"; // Thay bằng Template ID thực
const publicKey = "your_public_key"; // Thay bằng Public Key thực
```

## 6. Test

1. Chạy `npm run dev`
2. Vào trang Contact
3. Điền form và gửi
4. Kiểm tra email `buithach.it@gmail.com`

## Lưu ý

- EmailJS miễn phí cho 200 emails/tháng
- Có thể upgrade để tăng giới hạn
- Template có thể tùy chỉnh theo ý muốn
- Có thể thêm validation và spam protection

## Alternative: Resend

Nếu muốn dùng Resend thay vì EmailJS:

1. Cài đặt: `npm install resend`
2. Đăng ký tại [Resend](https://resend.com/)
3. Tạo API route trong `src/app/api/send/route.ts`
4. Sử dụng Resend API thay vì EmailJS

## Security

- Không commit API keys vào Git
- Sử dụng environment variables
- Thêm rate limiting nếu cần
- Validate input data
