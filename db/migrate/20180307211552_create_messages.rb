class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.string :to
      t.string :from
      t.datetime :time
      t.integer :message_type, default: 1
      t.boolean :reminder, default: false
      t.datetime :reminder_time, default: nil
      t.integer :repeat, default: 1
      t.text :text, default: nil

    end
  end
end
