# README

## Requirements

- PostgreSQL v11
- Rails v6
- Ruby v2.5.3

## Setup

```
git clone https://github.com/ManOfTech/Appointments.git
cd Appointments
bundle install
rails db:setup
rails server
```

## Design

Appointments Endpoint list of appointments

Query By:

- View Type: Hourly, Daily, Weekly, Monthly, Yearly
- Start_Date to End_Date

Schema:

User Types:
- Customer
- Provider

Model Keys:

Appointment model:
- id
- title
- schedule_start_time
- schedule_end_time
- customer_id
- provider_id
- timestamps

Customer model:
- id
- first_name
- last_name
- timestamps

Provider model:
- id
- first_name
- last_name
- timestamps

Serialized Response:

{
    appointment_id,
    appointment_title,
    schedule_end_time,
    schedule_start_time,
    customer_id,
    customer_first_name,
    customer_last_name,
    provider_id,
    provider_first_name,
    provider_last_name,
    appointment_timestamps
}

Pagination:

```
{
    data: [<Serialized Response>],
    count: number,
    from: min,
    to: max,
    per_page: number,
    current_page: number,
    last_page: number,
    (*page_url_options)
}
```

Response:

```
{
    'schedule_date_by_interval' => Pagination,
}
```

## Challenge Endpoint

```
GET: http://localhost:3000/api/v1/appointments
```

## Automated Swagger-Like API Documentation

```
Listen on url: http://localhost:3000/documentation
```
