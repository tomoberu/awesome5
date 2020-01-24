class CreateSakes < ActiveRecord::Migration[5.2]
  def change
    create_table :sakes do |t|
      t.string :sakename
      t.timestamps
    end
  end
end
