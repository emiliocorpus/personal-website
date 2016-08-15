class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name
      t.text :description
      t.string :url
      t.string :picture_url
      t.string :github_url

      t.timestamps null: false
    end
  end
end
