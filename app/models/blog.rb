class Blog < ActiveRecord::Base
	validates :title, presence: {:message => "cannot be blank"}
	validates :html, presence: {:message => "content cannot be blank"}
	validates :pic_url, presence: {:message => "cannot be blank"}
end
