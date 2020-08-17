db.createUser(
	{
		user: "username",
		pwd: "password",
		roles: [
			{
				role: "userAdmin",
				db: "webchatdb"
			}
		]
	}
)
