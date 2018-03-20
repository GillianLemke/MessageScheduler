class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, :limit => 20
      t.string :name
      t.string :phone
      t.string :email

      t.timestamps
    end
  end
end
