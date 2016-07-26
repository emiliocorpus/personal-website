class CreateBlogs < ActiveRecord::Migration
  def change
    create_table :blogs do |t|
      t.text :html
      t.string :title
      t.string :pic_url

      t.timestamps null: false
    end
  end
end
