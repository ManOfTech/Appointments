# README

Appointments Endpoint list of appointments

- attributes
 - time, with (who)

- Appointment has Many Users
- Users has Many Appointments

User Types
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

Serialize Response:

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
    data: [<Serialize Response>],
    count: number,
    from: min,
    to: max,
    'schedule_start_time' => [<Serialize Response>]
}
```
