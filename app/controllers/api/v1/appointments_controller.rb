class Api::V1::AppointmentsController < GlobalController

  def index
    data = Appointment.includes(:customer, :provider).all
    body = pagination(data, data.length)
    render json: body, status: 200
  end

  private

  def pagination(data, count)
    {
      data: data.map { |e| serialized_response(e) },
      count: count,
      from: data.first&.id,
      to: data.last&.id,
    }
  end

  def serialized_response(data)
    {
      appointment_id: data.id,
      appointment_title: data.title,
      schedule_end_time: data.schedule_end_time,
      schedule_start_time: data.schedule_start_time,
      customer_id: data.customer.id,
      customer_first_name: data.customer.first_name,
      customer_last_name: data.customer.last_name,
      provider_id: data.provider.id,
      provider_first_name: data.provider.first_name,
      provider_last_name: data.provider.last_name,
      appointment_created_at: data.created_at,
      appointment_updated_at: data.updated_at,
    }
  end

end
