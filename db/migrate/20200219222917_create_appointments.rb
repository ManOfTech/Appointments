class CreateAppointments < ActiveRecord::Migration[6.0]
  def change
    create_table :appointments do |t|
      t.string :title
      t.datetime :schedule_start_time 
      t.datetime :schedule_end_time 
      t.references :customer, index: true
      t.references :provider, index: true

      t.timestamps
    end
  end
end
